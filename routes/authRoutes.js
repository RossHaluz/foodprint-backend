const {
  registerUser,
  loginUser,
  verifyEmail,
  resendVerifyEmail,
  currentUser,
  updateUser,
  changePassword,
} = require("../controllers/authController");
const { checkAuth, upload } = require("../middlewars");

const route = require("express").Router();

//Register user - Ok
route.post("/register", registerUser);

//Login user - Ok
route.post("/login", loginUser);

//Verefi email - Ok
route.get("/verify/:verificationToken", verifyEmail);

//Resend verefi email - Ok
route.post("/verify", resendVerifyEmail);

route.use(checkAuth);
//Current user - Ok
route.get("/current", currentUser);

//Update user
route.patch("/update", upload.single("avatar"), updateUser);

//Change password
route.patch("/change-password", changePassword);

//Forgot password

module.exports = route;
