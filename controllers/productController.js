const path = require("path");
const {
  HttpError,
  HttpSuccess,
  CtrlWrapper,
  validateProductData,
  parseFormData,
} = require("../helpers");
const { prismadb } = require("../prismaClient");
const fs = require("fs/promises");
const crypto = require("crypto");
const sharp = require("sharp");

const productDir = path.join(__dirname, "..", "public", "products");
const productReviewDir = path.join(__dirname, "..", "public", "productReviews");

//Get products
const getProducts = async (req, res) => {
  const { searchValue, page = 1, pageSize = 50, isCount } = req.query;

  const searchQuery = searchValue ? searchValue.toLowerCase() : "";

  if (isCount) {
    const totalProducts = await prismadb.product.count({
      where: {
        isArchived: false,
      },
    });

    return res.status(200).json(HttpSuccess(totalProducts));
  }

  const searchCondition = searchValue
    ? {
        OR: [
          {
            title: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
          {
            article: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
        ],
      }
    : {};

  const totalProducts = await prismadb.product.count({
    where: {
      type: "main",
      ...searchCondition,
    },
  });

  const products = await prismadb.product.findMany({
    where: {
      type: "main",
      ...searchCondition,
    },
    include: {
      translations: true,
      images: true,
      categories: true,
      productCharacteristics: {
        include: {
          translations: true,
        },
      },
    },
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  const totalPages = Math.ceil((totalProducts || 0) / pageSize);

  return res.status(200).json(
    HttpSuccess({
      products,
      meta: {
        totalProducts,
        totalPages,
        page,
        pageSize,
      },
    })
  );
};

//Create product
const createProduct = async (req, res) => {
  const rawBody = req.body;
  const files = req.files;
  const body = parseFormData(rawBody);
  const { error, value: validatedData } = validateProductData(body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const { translations, categories } = validatedData;

  const images = [];

  if (files && files.length > 0) {
    await Promise.all(
      files?.map(async (file) => {
        const { path: tempUplod, originalname } = file;
        const filename = `${crypto.randomUUID()}_${originalname}`;
        const resultUpload = path.join(productDir, filename);
        try {
          await sharp(tempUplod)
            .resize(800, 800, { fit: "inside" })
            .jpeg({ quality: 80 })
            .toFile(resultUpload);

          try {
            await fs.access(tempUplod);
            await fs.unlink(tempUplod);
          } catch (error) {
            console.log(`Файл не знайдено для видалення: ${tempUplod}`);
          }

          images.push(filename);
        } catch (error) {
          console.error("Помилка при обробці зображення:", error);
        }
      })
    );
  }

  const price = Number(body?.price);
  if (isNaN(price)) {
    return res.status(400).json({ message: "Ціна повинна бути числом" });
  }

  const newProduct = await prismadb.product.create({
    data: {
      title: body?.title.toLowerCase(),
      description: body?.description,
      backgroundColor: body?.backgroundColor,
      textColor: body?.textColor,
      price,
      article: String(body?.article),
      position: parseInt(body?.position),
      isArchived: body?.isArchived,
      type: body?.type,
      ...(images.length > 0 && {
        images: { create: images.map((image) => ({ url: image })) },
      }),
    },
  });

  if (!newProduct) {
    throw HttpError("Something went wrong...", 400);
  }

  if (categories && categories?.length > 0) {
    await Promise.all(
      categories?.map((item) =>
        prismadb.productCategory.create({
          data: {
            categoryId: item?.categoryId,
            productId: newProduct?.id,
          },
        })
      )
    );
  }

  if (translations && translations?.length > 0) {
    await Promise.all(
      translations?.map((item) =>
        prismadb.productTranslation.create({
          data: {
            languageCode: item?.languageCode,
            title: item?.title,
            description: item?.description,
            productId: newProduct?.id,
          },
        })
      )
    );
  }

  return res.status(200).json(HttpSuccess(newProduct));
};

//Update product
const updateProducts = async (req, res) => {
  const rawBody = req.body;
  const body = parseFormData(rawBody);
  const { productId } = req.params;
  const { translations, categories } = body;
  const files = req.files;
  const images = [];

  if (files && files?.length > 0) {
    await Promise.all(
      files?.map(async (file) => {
        const { path: tempUplod, originalname } = file;
        const filename = `${crypto.randomUUID()}_${originalname}`;
        const resultUpload = path.join(productDir, filename);
        try {
          console.log(`Обробка файлу: ${filename}`);
          await sharp(tempUplod)
            .resize(800, 800, { fit: "inside" })
            .jpeg({ quality: 80 })
            .toFile(resultUpload);
          console.log(`Файл ${filename} успішно оброблений`);

          try {
            await fs.access(tempUplod);
            await fs.unlink(tempUplod);
          } catch (error) {
            console.log(`Файл не знайдено для видалення: ${tempUplod}`);
          }
          images.push(filename);
        } catch (error) {
          console.error("Помилка при обробці зображення:", error);
        }
      })
    );
  }

  const updateProduct = await prismadb.product.update({
    where: {
      id: productId,
    },
    data: {
      title: body?.title.toLowerCase(),
      description: body?.description ? body?.description : "",
      type: body?.type ? body?.type : "",
      backgroundColor: body?.backgroundColor ? body?.backgroundColor : "",
      textColor: body?.textColor ? body?.textColor : "",
      article: body?.article ? body?.article.toString() : "",
      price: parseInt(body?.price),
      position: body?.position ? Number(body?.position) : 1,
      isArchived: body?.isArchived,
    },
  });

  if (translations) {
    await Promise.all(
      translations.map((item) =>
        prismadb.productTranslation.upsert({
          where: {
            productId,
          },
          create: {
            productId,
            languageCode: item?.languageCode,
            title: item?.title.toLowerCase() || "",
            description: item?.description || "",
          },
          update: {
            languageCode: item?.languageCode,
            title: item?.title || "",
            description: item?.description || "",
          },
        })
      )
    );
  }

  if (images?.length > 0) {
    await prismadb.image.deleteMany({
      where: {
        productId,
      },
    });

    await prismadb.image.createMany({
      data: images?.map((image) => ({
        url: image,
        productId,
      })),
    });
  }

  if (categories && categories.length > 0) {
    try {
      await Promise.all(
        categories.map((item) =>
          prismadb.productCategory.upsert({
            where: {
              productId_categoryId: {
                productId,
                categoryId: item.categoryId,
              },
            },
            create: {
              productId,
              categoryId: item.categoryId,
            },
            update: {
              productId,
              categoryId: item.categoryId,
            },
          })
        )
      );
    } catch (error) {
      console.error("Error while upserting product categories:", error);
    }
  }

  return res.status(200).json(HttpSuccess(updateProduct));
};

//Add characteristics to product
const addCharacteristicToProduct = async (req, res) => {
  const { productId } = req.params;
  const body = req.body;
  const { characteristic } = body;

  await prismadb.productCharacteristic.deleteMany({
    where: {
      productId,
    },
  });

  await Promise.all(
    characteristic?.map(async ({ name, characteristicId, descriptions }) => {
      await prismadb.productCharacteristic.create({
        data: {
          name: name,
          characteristicId: characteristicId,
          productId,
          ...(descriptions &&
            descriptions?.length > 0 && {
              translations: {
                create: descriptions.map((item) => ({
                  description: item?.text,
                  languageCode: item?.languageId,
                })),
              },
            }),
        },
      });
    })
  );

  res.status(200).json(
    HttpSuccess({
      message: "Characteristics success aded",
    })
  );
};

//Delete product
const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  await prismadb.product.delete({
    where: {
      id: productId,
    },
  });

  if (!deleteProduct) {
    throw HttpError('"Something went wrong...', 400);
  }

  return res.status(200).json({
    message: "Product success delete",
  });
};

//Get product details
const getProductDetails = async (req, res) => {
  const { productId } = req.params;

  const product = await prismadb.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      translations: true,
      images: true,
      categories: {
        include: {
          category: true,
        },
      },
      productCharacteristics: {
        include: {
          translations: true,
          characteristic: true,
        },
      },
    },
  });

  return res.status(200).json(HttpSuccess(product));
};

//Create product review
const createReviewProduct = async (req, res) => {
  const body = req.body;
  const { productId } = req.params;
  const files = req.files;
  const photos = [];

  if (files) {
    await Promise.all(
      files?.map(async (file) => {
        const { path: tempUplod, originalname } = file;
        const filename = `${crypto.randomUUID()}_${originalname}`;
        const resultUpload = path.join(productReviewDir, filename);
        await fs.rename(tempUplod, resultUpload);
        photos.push(filename);
      })
    );
  }

  const newProductReview = await prismadb.productReview.create({
    data: {
      ...body,
      productId,
      photos: {
        create: photos?.map((item) => ({
          url: item,
        })),
      },
    },
  });

  return res.status(200).json(HttpSuccess(newProductReview));
};

//Get additional products
const getAdditionalProduct = async (req, res) => {
  const additionalProducts = await prismadb.product.findMany({
    where: {
      type: "additional",
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      images: true,
      translations: true,
    },
  });

  return res.status(200).json(HttpSuccess(additionalProducts));
};

//Get best products
const getBestProducts = async (req, res) => {
  const bestSellerProducts = await prismadb.product.findMany({
    where: {
      isFeatured: true,
    },
    include: {
      images: true,
    },
  });

  if (!bestSellerProducts) {
    throw HttpError("Best seller products not found", 404);
  }

  return res.status(200).json(HttpSuccess(bestSellerProducts));
};

module.exports = {
  getProducts: CtrlWrapper(getProducts),
  createProduct: CtrlWrapper(createProduct),
  updateProducts: CtrlWrapper(updateProducts),
  deleteProduct: CtrlWrapper(deleteProduct),
  getProductDetails: CtrlWrapper(getProductDetails),
  createReviewProduct: CtrlWrapper(createReviewProduct),
  getAdditionalProduct: CtrlWrapper(getAdditionalProduct),
  getBestProducts: CtrlWrapper(getBestProducts),
  addCharacteristicToProduct: CtrlWrapper(addCharacteristicToProduct),
};
