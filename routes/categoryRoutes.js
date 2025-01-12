const {
  getCategories,
  getCategoryDetails,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { checkAuth, authorizeRole } = require("../middlewars");

const router = require("express").Router();

//Get all categories by store - Ok
router.get("/", getCategories);

//Get category details - Ok
router.get("/:categoryId", getCategoryDetails);

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Create category - Ok
router.post("/create", createCategory);

//Update category - Ok
router.patch("/:categoryId/update", updateCategory);

//Delete category - Ok
router.delete("/:categoryId/delete", deleteCategory);

module.exports = router;
