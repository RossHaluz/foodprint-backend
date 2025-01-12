const { HttpError, HttpSuccess, CtrlWrapper } = require("../helpers");
const { prismadb } = require("../prismaClient");

//Create delivery info
const createDeliveryInfo = async (req, res) => {
  const body = req.body;

  const newDeliveryInfo = await prismadb.deliveryInfo.create({
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

  if (!newDeliveryInfo) {
    throw HttpError("Bad request", 400);
  }

  return res.status(200).json(HttpSuccess(newDeliveryInfo));
};

//Get delivery info
const getDeliveryInfo = async (req, res) => {
  const deliveryInfo = await prismadb.deliveryInfo.findFirst({
    include: {
      translation: true,
    },
  });

  if (!deliveryInfo) {
    throw HttpError("Delivery info not found", 404);
  }

  return res.status(200).json(HttpSuccess(deliveryInfo));
};

//Update delivery info
const updateDeliveryInfo = async (req, res) => {
  const { deliveryInfoId } = req.params;
  const body = req.body;

  const updateDeliveryInfo = await prismadb.deliveryInfo.update({
    where: {
      id: deliveryInfoId,
    },
    data: {
      description: body?.description,
    },
  });

  if (body?.translation) {
    await Promise.all(
      body?.translation?.map((item) =>
        prismadb.deliveryInfoTranslation.upsert({
          where: {
            languageCode: item?.languageCode,
          },
          create: {
            deliveryId: deliveryInfoId,
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

  if (!updateDeliveryInfo) {
    throw HttpError("Bad Request", 400);
  }

  return res.status(200).json(HttpSuccess(updateDeliveryInfo));
};

module.exports = {
  createDeliveryInfo: CtrlWrapper(createDeliveryInfo),
  getDeliveryInfo: CtrlWrapper(getDeliveryInfo),
  updateDeliveryInfo: CtrlWrapper(updateDeliveryInfo),
};
