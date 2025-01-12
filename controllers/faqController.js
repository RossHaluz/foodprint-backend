const { HttpError, HttpSuccess, CtrlWrapper } = require("../helpers");
const { prismadb } = require("../prismaClient");

//Get faqs
const getFags = async (req, res) => {
  const faqs = await prismadb.fAQ.findMany({
    include: {
      translations: true,
    },
  });

  return res.status(200).json(HttpSuccess(faqs));
};

//Create faq
const createFaq = async (req, res) => {
  const body = req.body;

  const newFaq = await prismadb.fAQ.create({
    data: {
      ...body,
      ...(body?.translations && {
        translations: {
          create: body?.translations?.map((item) => ({
            question: item?.question,
            answer: item?.answer,
            languageCode: item?.languageCode,
          })),
        },
      }),
    },
  });

  if (!newFaq) {
    throw HttpError("Bad request", 400);
  }

  return res.status(200).json(HttpSuccess(newFaq));
};

//Get faq details
const getFaqDetails = async (req, res) => {
  const { faqId } = req.params;

  const faq = await prismadb.fAQ.findUnique({
    where: {
      id: faqId,
    },
    include: {
      translations: true,
    },
  });

  if (!faq) {
    throw HttpError("Faq not found", 404);
  }

  return res.status(200).json(HttpSuccess(faq));
};

//Update faq
const updateFaq = async (req, res) => {
  const { faqId } = req.params;
  const body = req.body;

  const updateFaq = await prismadb.fAQ.update({
    where: {
      id: faqId,
    },
    data: {
      answer: body?.answer,
      question: body?.question,
    },
  });

  if (body?.translations) {
    await Promise.all(
      body?.translations?.map((item) =>
        prismadb.fAQTranslation.upsert({
          where: {
            languageCode: item?.languageCode,
          },
          create: {
            faqId,
            question: item?.question,
            answer: item?.answer,
            languageCode: item?.languageCode,
          },
          update: {
            question: item?.question,
            answer: item?.answer,
            languageCode: item?.languageCode,
          },
        })
      )
    );
  }

  if (!updateFaq) {
    throw HttpError("Bad Request", 400);
  }

  return res.status(200).json(HttpSuccess(updateFaq));
};

//Delete faq
const deleteFaq = async (req, res) => {
  const {  faqId } = req.params;

  const deleteFaq = await prismadb.fAQ.delete({
    where: {
      id: faqId,
    },
  });

  if (!deleteFaq) {
    throw HttpError("Bad request", 400);
  }

  return res.status(200).json(
    HttpSuccess({
      message: "Faq success delete",
    })
  );
};

module.exports = {
  getFags: CtrlWrapper(getFags),
  createFaq: CtrlWrapper(createFaq),
  getFaqDetails: CtrlWrapper(getFaqDetails),
  updateFaq: CtrlWrapper(updateFaq),
  deleteFaq: CtrlWrapper(deleteFaq),
};
