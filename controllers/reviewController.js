const path = require("path");
const { HttpError, HttpSuccess, CtrlWrapper } = require("../helpers");
const { prismadb } = require("../prismaClient");
const fs = require("fs/promises");
const crypto = require("crypto");

const reviewsDir = path.join(__dirname, "..", "public", "reviews");

//Create review
const createReview = async (req, res) => {
  const body = req.body;
  const translation = JSON.parse(body.translation);

  if (req.file) {
    const { path: tempUpload, originalname } = req.file;
    const fileName = `${crypto.randomUUID()}_${originalname}`;
    const resultUpload = path.join(reviewsDir, fileName);
    await fs.rename(tempUpload, resultUpload);
    const newReviewWithImage = await prismadb.review.create({
      data: {
        ...body,
        translation: {
          create: translation?.map((item) => ({
            languageCode: item?.languageCode,
            desc: item?.desc,
          })),
        },
        photo: {
          create: {
            url: fileName,
          },
        },
      },
    });

    return res.status(200).json(HttpSuccess(newReviewWithImage));
  }

  const newReview = await prismadb.review.create({
    data: {
      ...body,
      translation: {
        create: translation?.map((item) => ({
          languageCode: item?.languageCode,
          desc: item?.desc,
        })),
      },
    },
  });

  return res.status(200).json(HttpSuccess(newReview));
};

//Get reviews
const getReviews = async (req, res) => {
  const reviews = await prismadb.review.findMany({
    include: {
      photo: true,
    },
  });

  return res.status(200).json(HttpSuccess(reviews));
};

//GEt review details
const getReviewDetails = async (req, res) => {
  const { reviewId } = req.params;

  const review = await prismadb.review.findUnique({
    where: {
      id: reviewId,
    },
    include: {
      translation: true,
      photo: true,
    },
  });

  if (!review) {
    throw HttpError("Review not found", 404);
  }

  return res.status(200).json(HttpSuccess(review));
};

//Upload review
const uploadReview = async (req, res) => {
  const { reviewId } = req.params;
  const body = req.body;
  const translation = JSON.parse(body.translation);
  let photo = null;

  if (req.file) {
    const { path: tempUpload, originalname } = req.file;
    const fileName = `${crypto.randomUUID()}_${originalname}`;
    const resultUpload = path.join(reviewsDir, fileName);
    await fs.rename(tempUpload, resultUpload);
    photo = fileName;
  }

  const updateReview = await prismadb.review.update({
    where: {
      id: reviewId,
    },
    data: {
      ...body,
      translation: {
        deleteMany: {}, // Clear existing translations
        create: translation.map((item) => ({
          languageCode: item.languageCode,
          desc: item.desc,
        })),
      },
      ...(photo && {
        photo: {
          deleteMany: {},
          create: {
            url: photo,
          },
        },
      }),
    },
  });
  return res.status(200).json(HttpSuccess(updateReview));
};

//Delete review
const deleteReview = async (req, res) => {
  const { reviewId } = req.params;

  const deleteReview = await prismadb.review.delete({
    where: {
      id: reviewId,
    },
  });

  if (!deleteReview) {
    throw HttpError("Something went wrong...", 400);
  }

  return res.status(200).json(
    HttpSuccess({
      message: "Review success delete",
    })
  );
};

module.exports = {
  createReview: CtrlWrapper(createReview),
  getReviews: CtrlWrapper(getReviews),
  getReviewDetails: CtrlWrapper(getReviewDetails),
  uploadReview: CtrlWrapper(uploadReview),
  deleteReview: CtrlWrapper(deleteReview),
};
