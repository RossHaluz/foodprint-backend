const path = require("path");
const { HttpError, HttpSuccess, CtrlWrapper } = require("../helpers");
const { prismadb } = require("../prismaClient");
const fs = require("fs/promises");
const crypto = require("crypto");

const billboardDir = path.join(__dirname, "..", "public", "billboards");

const getAllBillboards = async (req, res) => {
  const billboards = await prismadb.billboard.findMany();

  return res.status(200).json(HttpSuccess(billboards));
};

const createBillboard = async (req, res) => {
  console.log("heloo");
  const body = req.body;
  console.log(body);
  console.log("file", req.file);

  if (req.file) {
    const { path: tempUpload, originalname } = req.file;
    const filename = `${crypto.randomUUID()}_${originalname}`;
    const resultUpload = path.join(billboardDir, filename);
    await fs.rename(tempUpload, resultUpload);

    const newBillboardWhithImage = await prismadb.billboard.create({
      data: {
        label: body?.label,
        imageUrl: filename,
      },
    });

    console.log("newBillboardWhithImage", newBillboardWhithImage);

    if (!newBillboardWhithImage) {
      throw HttpError("Something went wrong", 400);
    }

    return res.status(201).json(HttpSuccess(newBillboardWhithImage));
  }

  const newBillbord = await prismadb.billboard.create({
    data: {
      label: body?.label,
    },
  });

  if (!newBillbord) {
    throw HttpError("Something went wrong", 400);
  }

  return res.status(201).json(HttpSuccess(newBillbord));
};

const updateBillboard = async (req, res) => {
  const body = req.body;
  const { billboardId } = req.params;
  const file = req.file;

  if (file) {
    const { path: tempUpload, originalname } = file;
    const filename = `${crypto.randomUUID()}_${originalname}`;
    const resultUpload = path.join(billboardDir, filename);
    await fs.rename(tempUpload, resultUpload);
    const updateBillboardWhithImage = await prismadb.billboard.update({
      where: {
        id: billboardId,
      },
      data: {
        label: body?.label,
        imageUrl: filename,
      },
    });

    return res.status(201).json(HttpSuccess(updateBillboardWhithImage));
  }

  const updateBillbord = await prismadb.billboard.update({
    where: {
      id: billboardId,
    },
    data: {
      label: body?.label,
    },
  });

  if (!updateBillbord) {
    return HttpError("Billbord not updated", 400);
  }

  return res.status(200).json(HttpSuccess(updateBillbord));
};

const deleteBillboard = async (req, res) => {
  const { billboardId } = req.params;

  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: billboardId,
    },
  });

  if (!billboard) {
    throw HttpError("Billboard not found", 404);
  }

  const deleteBillboard = await prismadb.billboard.delete({
    where: {
      id: billboardId,
    },
  });

  if (!deleteBillboard) {
    throw HttpError("Billbord not delete", 400);
  }

  return res.status(200).json(
    HttpSuccess({
      Message: "Billboard success delete",
    })
  );
};

const getBillboardDetails = async (req, res) => {
  const { billboardId } = req.params;

  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: billboardId,
    },
  });

  if (!billboard) {
    throw HttpError("Billboard not found", 404);
  }

  return res.status(200).json(HttpSuccess(billboard));
};

module.exports = {
  createBillboard: CtrlWrapper(createBillboard),
  getAllBillboards: CtrlWrapper(getAllBillboards),
  updateBillboard: CtrlWrapper(updateBillboard),
  deleteBillboard: CtrlWrapper(deleteBillboard),
  getBillboardDetails: CtrlWrapper(getBillboardDetails),
};
