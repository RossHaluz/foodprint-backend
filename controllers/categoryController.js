const { HttpError, HttpSuccess, CtrlWrapper } = require("../helpers");
const { prismadb } = require("../prismaClient");

// Create category
const createCategory = async (req, res) => {
  const body = req.body;
  const { name, billboardId, parentId, type } = body;

  if (parentId) {
    const parentCategory = await prismadb.category.findUnique({
      where: { id: parentId },
    });

    if (!parentCategory) {
      throw HttpError("Parent category not found", 400);
    }
  }

  const newCategory = await prismadb.category.create({
    data: {
      name,
      type,
      ...(billboardId && {
        billboard: {
          connect: { id: billboardId },
        },
      }),
      ...(parentId && {
        parent: {
          connect: { id: parentId },
        },
      }),
    },
  });

  return res.status(200).json(HttpSuccess(newCategory));
};

// Get  max 4 or all  categories
const getCategories = async (req, res) => {
  const { limit } = req.query;

  const categories = await prismadb.category.findMany({
    where: {
      type: "main",
    },
    include: {
      billboard: true,
      products: true,
      children: {
        include: {
          children: true,
        },
      },
    },
    take: limit ? parseFloat(limit) : undefined,
  });

  return res.status(200).json(HttpSuccess(categories));
};

//Get category details
const getCategoryDetails = async (req, res) => {
  const { categoryId } = req.params;

  // Fetch the category with products matching the filter conditions
  const category = await prismadb.category.findUnique({
    where: {
      id: categoryId,
    },
    include: {
      children: {
        include: {
          billboard: true,
        },
      },

      products: {
        where: {
          categoryId,
        },
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  });

  if (!category) {
    return HttpError("Category not found", 404);
  }

  return res.status(200).json(
    HttpSuccess({
      category,
    })
  );
};

// Update category
const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const body = req.body;
  const { parentId } = body;

  const updateCategory = await prismadb.category.update({
    where: {
      id: categoryId,
    },
    data: {
      ...body,
      parentId: parentId || null,
    },
  });

  return res.status(200).json(HttpSuccess(updateCategory));
};

// Delete category
const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;

  const deleteCategory = await prismadb.category.delete({
    where: {
      id: categoryId,
    },
  });

  if (!deleteCategory) {
    throw HttpError("Something went wrong", 400);
  }

  return res.status(200).json(
    HttpSuccess({
      message: "Category success delete",
    })
  );
};

module.exports = {
  createCategory: CtrlWrapper(createCategory),
  getCategories: CtrlWrapper(getCategories),
  getCategoryDetails: CtrlWrapper(getCategoryDetails),
  updateCategory: CtrlWrapper(updateCategory),
  deleteCategory: CtrlWrapper(deleteCategory),
};
