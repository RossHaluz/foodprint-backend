const { HttpError, HttpSuccess, CtrlWrapper } = require("../helpers");
const { prismadb } = require("../prismaClient");

//Get all characteristics
const getCharacteristics = async (req, res) => {
  const characteristics = await prismadb.characteristic.findMany({
    include: {
      translations: true,
    },
  });

  res.status(200).json(HttpSuccess(characteristics));
};

//Get characteristic details
const getCharacteristicDetails = async (req, res) => {
  const { characteristicId } = req.params;

  const characteristicDetails = await prismadb.characteristic.findUnique({
    where: {
      id: characteristicId,
    },
    include: {
      translations: true,
    },
  });

  if (!characteristicDetails) {
    throw HttpError("Characteristic not found", 404);
  }

  return res.status(200).json(HttpSuccess(characteristicDetails));
};

//Create characteristic
const createCharacteristic = async (req, res) => {
  const body = req.body;
  const { name, translations } = body;

  const newCharacteristic = await prismadb.characteristic.create({
    data: {
      name,
    },
  });

  if (translations && translations.length > 0) {
    await prismadb.characteristicTranslation.createMany({
      data: translations.map((item) => ({
        languageCode: item?.languageCode,
        name: item?.name,
        characteristicId: newCharacteristic.id, // використовуємо id створеної характеристики
      })),
    });
  }

  return res.status(200).json(HttpSuccess(newCharacteristic));
};

//Update characteristic
const updateCharacteristic = async (req, res) => {
  const body = req.body;
  const { characteristicId } = req.params;
  const { name, translations } = body;

  const updatedCharacteristic = await prismadb.characteristic.update({
    where: {
      id: characteristicId,
    },
    data: {
      name,
    },
  });

  if (translations && Array.isArray(translations)) {
    await Promise.all(
      translations.map(async (item) => {
        const existingTranslation =
          await prismadb.characteristicTranslation.findFirst({
            where: {
              characteristicId: updatedCharacteristic?.id,
              languageCode: item.languageCode,
            },
          });

        if (existingTranslation) {
          await prismadb.characteristicTranslation.update({
            where: {
              id: existingTranslation.id,
            },
            data: {
              name: item.name,
            },
          });
        } else {
          await prismadb.characteristicTranslation.create({
            data: {
              characteristicId: updatedCharacteristic?.id,
              languageCode: item.languageCode,
              name: item.name,
            },
          });
        }
      })
    );
  }

  return res.status(200).json(HttpSuccess(updatedCharacteristic));
};

//Delete characteristic
const deleteCharacteristic = async (req, res) => {
  const { characteristicId } = req.params;
  await prismadb.characteristic.delete({
    where: {
      id: characteristicId,
    },
  });

  return res.status(200).json({
    message: "Characteristic success delete",
  });
};

module.exports = {
  createCharacteristic: CtrlWrapper(createCharacteristic),
  updateCharacteristic: CtrlWrapper(updateCharacteristic),
  deleteCharacteristic: CtrlWrapper(deleteCharacteristic),
  getCharacteristics: CtrlWrapper(getCharacteristics),
  getCharacteristicDetails: CtrlWrapper(getCharacteristicDetails),
};
