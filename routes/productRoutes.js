const {
  getProducts,
  createProduct,
  updateProducts,
  deleteProduct,
  getProductDetails,
  createReviewProduct,
  getAdditionalProduct,
  getBestProducts,
  addCharacteristicToProduct,
} = require("../controllers/productController");
const { checkAuth, authorizeRole, upload } = require("../middlewars");
const router = require("express").Router();

//Get best products
router.get("/best", getBestProducts);

//Get products - Ok
router.get("/", getProducts);

//Get product details - Ok
router.get("/:productId", getProductDetails);

//Get additional products
router.get("/additional", getAdditionalProduct);

//Create review for product - Ok
router.post("/:productId/review", upload.array("photos"), createReviewProduct);

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Create product - Ok
router.post("/create", upload.array("images"), createProduct);

//Update product - Ok
router.patch("/:productId/update", upload.array("images"), updateProducts);

//Add characteristics to product
router.patch("/:productId/add-characteristic", addCharacteristicToProduct);

//Delete product - Ok
router.delete("/:productId/delete", deleteProduct);

module.exports = router;
