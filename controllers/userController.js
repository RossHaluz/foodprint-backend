const { HttpError, HttpSuccess, CtrlWrapper } = require("../helpers");
const { prismadb } = require("../prismaClient");

//Create user
const createUser = async (req, res) => {
  const body = req.body;
  const { email } = body;
  const user = await prismadb.user.findFirst({
    where: {
      email,
    },
  });

  if (user) {
    throw HttpError("User already exist", 400);
  }

  const newUser = await prismadb.user.create({
    data: {
      ...body,
    },
  });

  return res.status(200).json(HttpSuccess(newUser));
};

//Get users
const getUsers = async (req, res) => {
  const users = await prismadb.user.findMany({
    where: {
      role: "user",
    },
  });

  return res.status(200).json(HttpSuccess(users));
};

//Update user
const updateUser = async (req, res) => {
  const body = req.body;
  const { userId } = req.params;

  const updateUser = await prismadb.user.update({
    where: {
      id: userId,
    },
    data: {
      ...body,
    },
  });

  if (!updateUser) {
    throw HttpError("Something went wrong", 400);
  }

  return res.status(200).json(HttpSuccess(updateUser));
};

//Delete user
const deleteUser = async (req, res) => {
  const { userId } = req.params;

  await prismadb.order.deleteMany({
    where: {
      userId,
    },
  });

  const deleteUser = await prismadb.user.delete({
    where: {
      id: userId,
    },
  });

  if (!deleteUser) {
    throw HttpError("Something went wrong...", 400);
  }

  return res.status(200).json(
    HttpSuccess({
      message: "User success delete",
    })
  );
};

//Get user details
const getUserDetails = async (req, res) => {
  const { userId } = req.params;

  const user = await prismadb.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw HttpError("User not found", 404);
  }

  return res.status(200).json(HttpSuccess(user));
};

module.exports = {
  createUser: CtrlWrapper(createUser),
  getUsers: CtrlWrapper(getUsers),
  updateUser: CtrlWrapper(updateUser),
  deleteUser: CtrlWrapper(deleteUser),
  getUserDetails: CtrlWrapper(getUserDetails),
};
