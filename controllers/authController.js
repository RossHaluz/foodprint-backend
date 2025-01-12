const path = require("path");
const {
  CtrlWrapper,
  HttpError,
  createToken,
  HttpSuccess,
  comparePassword,
  passwordHashing,
  sendMail,
} = require("../helpers");
const { prismadb } = require("../prismaClient");
const gravatar = require("gravatar");
const fs = require("fs/promises");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const avatarDir = path.join(__dirname, "..", "public", "avatars");

const registerUser = async (req, res) => {
  const body = req.body;
  const { email, password } = body;

  const user = await prismadb.user.findFirst({
    where: {
      email,
    },
  });

  if (user) {
    throw HttpError("User already exist", 400);
  }

  const hashPassword = await passwordHashing(password);
  const avatar = gravatar.url(email);

  const newUser = await prismadb.user.create({
    data: {
      ...body,
      password: hashPassword,
      role: "user",
      avatar,
    },
  });

  return res.status(201).json(HttpSuccess({ newUser }));
};

const loginUser = async (req, res) => {
  const body = req.body;
  const { email, password } = body;

  const user = await prismadb.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw HttpError("User not found", 404);
  }

  const comparePass = await comparePassword(user, password);

  if (!comparePass) {
    return res.status(400).json({
      message: "Password or email in not corect",
    });
  }

  const token = await createToken(user, (expire = "24h"));

  return res
    .status(200)
    .json(HttpSuccess({ token: token, role: user.role, type: user?.type }));
};

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await prismadb.user.findFirst({
    where: {
      verificationToken,
    },
  });

  if (user?.isVerify) {
    throw HttpError("Your email already is verify", 400);
  }

  if (!user) {
    throw HttpError("User with verification token no found", 404);
  }

  await prismadb.user.update({
    where: {
      id: user.id,
    },
    data: {
      isVerify: true,
    },
  });

  return res.json(200).json(
    HttpSuccess({
      message: "Your email succes verify!",
    })
  );
};

const resendVerifyEmail = async (req, res) => {
  const body = req.body;
  const { email } = body;
  const user = await prismadb.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw HttpError("User not found", 404);
  }

  if (user.verify) {
    throw HttpError("Verification has already been passed", 400);
  }

  const variables = {
    verificationToken: user.verificationToken,
  };

  await sendMail(
    user?.email,
    "Resend verify link",
    "template/verify.html",
    variables
  );

  return res.status(200).json({
    message: "Verification email sent",
  });
};

const currentUser = async (req, res) => {
  const userId = req.userId;
  const user = await prismadb.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      orders: {
        include: {
          orderItems: {
            include: {
              product: {
                include: {
                  images: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!user) {
    throw HttpError("User not found", 404);
  }

  return res.status(200).json(HttpSuccess({ user, role: user?.role }));
};

const updateUser = async (req, res) => {
  const userId = req.userId;
  const body = req.body;
  let avatar = null;

  const user = await prismadb.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw HttpError("User not found", 404);
  }

  if (req.file) {
    const { path: tempUpload, originalname } = req.file;
    const filename = `${crypto.randomUUID()}_${originalname}`;
    const resultUpload = path.join(avatarDir, filename);
    await fs.rename(tempUpload, resultUpload);
    avatar = filename;

    const updateUserWhithImage = await prismadb.user.update({
      where: {
        id: userId,
      },
      data: {
        ...body,
        avatar,
      },
    });

    if (!updateUserWhithImage) {
      throw HttpError("Something went wrong", 400);
    }

    return res.status(200).json(HttpSuccess(updateUserWhithImage));
  }

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

const changePassword = async (req, res) => {
  const userId = req.userId;
  const { oldPassword, newPassword } = req.body;
  const user = await prismadb.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw HttpError("User not found", 404);
  }

  const compareOldPassword = await bcrypt.compare(oldPassword, user?.password);

  if (!compareOldPassword) {
    throw HttpError("Old password is not correct", 400);
  }

  const hashNewPassword = await bcrypt.hash(newPassword, 10);
  const updatePassword = await prismadb.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashNewPassword,
    },
  });

  if (!updatePassword) {
    throw HttpError("Something went wrong", 400);
  }

  return res.status(200).json(
    HttpSuccess({
      message: "Password success update",
    })
  );
};

module.exports = {
  registerUser: CtrlWrapper(registerUser),
  loginUser: CtrlWrapper(loginUser),
  verifyEmail: CtrlWrapper(verifyEmail),
  resendVerifyEmail: CtrlWrapper(resendVerifyEmail),
  currentUser: CtrlWrapper(currentUser),
  updateUser: CtrlWrapper(updateUser),
  changePassword: CtrlWrapper(changePassword),
};
