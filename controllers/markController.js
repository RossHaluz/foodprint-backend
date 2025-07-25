const { HttpError, HttpSuccess, CtrlWrapper } = require("../helpers");
const { prismadb } = require("../prismaClient");

//All marks
const allMarks = async (req, res) => {
  const marks = await prismadb.globusMarks.findMany();

  if (!marks) throw HttpError("Something went wrong", 400);

  return res.status(200).json(HttpSuccess(marks));
};

//Get mark details
const getMarkDetails = async (req, res) => {
  const { markId } = req.params;
  const markDetails = await prismadb.globusMarks.findUnique({
    where: {
      id: markId,
    },
  });

  if (!markDetails) throw HttpError("Mark not found", 404);

  return res.status(200).json(HttpSuccess(markDetails));
};

//Add mark
const addMark = async (req, res) => {
  const { lat, lon } = req.body;
  const parsedLat = parseFloat(lat);
const parsedLon = parseFloat(lon);
  const mark = await prismadb.globusMarks.findFirst({
    where: {
      lat: parsedLat,
      lon: parsedLon,
    },
  });


  if (mark) throw HttpError("Mark already exist", 400);

  const newMark = await prismadb.globusMarks.create({
    data: {
      ...req.body,
      lon: parsedLon,
      lat: parsedLat
    },
  });

  if (!newMark) throw HttpError("Something went wront", 400);

  return res.status(200).json(HttpSuccess(newMark));
};

//Update mark
const updateMark = async (req, res) => {
  const { markId } = req.params;
  const {lat, lon} = req.body;
  const updateMark = await prismadb.globusMarks.update({
    where: {
      id: markId,
    },
    data: {
      ...req.body,
      lat: parseFloat(lat),
      lon: parseFloat(lon)
    },
  });


  if (!updateMark) throw HttpError("Something went wrong", 400);

  return res.status(200).json(HttpSuccess(updateMark, "Mark success updated"));
};

//Delete mark
const deleteMark = async (req, res) => {
  const { markId } = req.params;
  const deleteMark = await prismadb.globusMarks.delete({
    where: {
      id: markId,
    },
  });

  if (!deleteMark) throw HttpError("Something went wrong", 400);

  return res.status(200).json(HttpSuccess(deleteMark, "Mark success delete"));
};

module.exports = {
  addMark: CtrlWrapper(addMark),
  updateMark: CtrlWrapper(updateMark),
  deleteMark: CtrlWrapper(deleteMark),
  allMarks: CtrlWrapper(allMarks),
  getMarkDetails: CtrlWrapper(getMarkDetails),
};
