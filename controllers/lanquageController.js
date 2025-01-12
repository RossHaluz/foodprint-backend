const { HttpError, HttpSuccess, CtrlWrapper } = require("../helpers");
const { prismadb } = require("../prismaClient");

//Create lanquage
const createLanquage = async (req, res) => {
  const body = req.body;

  const newLanguage = await prismadb.language.create({
    data: {
      ...body,
    },
  });

  if (!newLanguage) {
    throw HttpError("Something went wrong...", 400);
  }

  return res.status(200).json(HttpSuccess(newLanguage));
};

//Get lanquages
const getLanquages = async (req, res) => {
  const languages = await prismadb.language.findMany();

  return res.status(200).json(HttpSuccess(languages));
};

//Update lanquage
const updateLanquage = async (req, res) => {
  const body = req.body;
  const { lanquageId } = req.params;

  const updateLanguage = await prismadb.language.update({
    where: {
      id: lanquageId,
    },
    data: {
      ...body,
    },
  });

  if (!updateLanguage) {
    throw HttpError("Something went wrong...", 400);
  }

  return res.status(200).json(HttpSuccess(updateLanguage));
};

//Delete lanquage
const deleteLanquage = async (req, res) => {
  const {  lanquageId } = req.params;

  const deleteLanguage = await prismadb.language.delete({
    where: {
      id: lanquageId,
    },
  });

  if (!deleteLanguage) {
    throw HttpError("Something went wrong...", 400);
  }

  return res.status(200).json({
    message: "Lanquage success delete",
  });
};

//Get lanquage details
const getLanquageDetails = async (req, res) => {
  const { lanquageId } = req.params;

  const language = await prismadb.language.findUnique({
    where: {
      id: lanquageId,
    },
  });

  if (!language) {
    throw HttpError("Lanquage not found", 404);
  }

  return res.status(200).json(HttpSuccess(language));
};

module.exports = {
  createLanquage: CtrlWrapper(createLanquage),
  getLanquages: CtrlWrapper(getLanquages),
  updateLanquage: CtrlWrapper(updateLanquage),
  deleteLanquage: CtrlWrapper(deleteLanquage),
  getLanquageDetails: CtrlWrapper(getLanquageDetails),
};
