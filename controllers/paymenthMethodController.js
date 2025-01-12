const { HttpError, HttpSuccess, CtrlWrapper } = require("../helpers");
const { prismadb } = require("../prismaClient");

//Get paymeth method
const getPaymethMethod = async (req, res) => {
  const paymethMethod = await prismadb.paymentMethod.findFirst({
    include: {
      translation: true,
    },
  });

  if (!paymethMethod) {
    throw HttpError("Paymenth method not found", 404);
  }

  return res.status(200).json(HttpSuccess(paymethMethod));
};

//Create paymeth method
const createPaymenthMethod = async (req, res) => {
  const body = req.body;

  const newPaymentMethod = await prismadb.paymentMethod.create({
    data: {
      ...body,
      ...(body?.translation && {
        translation: {
          create: body?.translation?.map((item) => ({
            languageCode: item?.languageCode,
            description: item?.description,
          })),
        },
      }),
    },
  });

  return res.status(200).json(HttpSuccess(newPaymentMethod));
};

//Update paymenth method
const updatePaymenthMethod = async (req, res) => {
  const { paymentId } = req.params;
  const body = req.body;

  const updatePaymentMethod = await prismadb.paymentMethod.update({
    where: {
      id: paymentId,
    },
    data: {
      description: body?.description,
    },
  });

  if (body.translation) {
    await Promise.all(
      body?.translation?.map((item) =>
        prismadb.paymentMethodTranslation.upsert({
          where: {
            languageCode: item?.languageCode,
          },
          create: {
            paymentMethodId: paymentId,
            languageCode: item?.languageCode,
            description: item?.description,
          },
          update: {
            languageCode: item?.languageCode,
            description: item?.description,
          },
        })
      )
    );
  }

  return res.status(200).json(HttpSuccess(updatePaymentMethod));
};

module.exports = {
  getPaymethMethod: CtrlWrapper(getPaymethMethod),
  createPaymenthMethod: CtrlWrapper(createPaymenthMethod),
  updatePaymenthMethod: CtrlWrapper(updatePaymenthMethod),
};
