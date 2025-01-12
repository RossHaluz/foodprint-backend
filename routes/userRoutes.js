const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserDetails,
} = require("../controllers/userController");
const { checkAuth, authorizeRole } = require("../middlewars");
const router = require("express").Router();

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Create user - Ok
router.post("/create", createUser);

//Get users - Ok
router.get("/", getUsers);

//Update user - Ok
router.patch("/:userId/update", updateUser);

//Delete user - Ok
router.delete("/:userId/delete", deleteUser);

//Get user details -Ok
router.get("/:userId", getUserDetails);

module.exports = router;
