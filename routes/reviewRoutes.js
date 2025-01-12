const {
  createReview,
  getReviews,
  getReviewDetails,
  uploadReview,
  deleteReview,
} = require("../controllers/reviewController");
const { checkAuth, authorizeRole, upload } = require("../middlewars");

const router = require("express").Router();

//Get reviews
router.get("/", getReviews);

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Create review - Ok
router.post("/create", upload.single("photo"), createReview);

//Get review details - Ok
router.get("/:reviewId", getReviewDetails);

//Update review - Ok
router.patch("/:reviewId/update", upload.single("photo"), uploadReview);

//Delete review - Ok
router.delete("/:reviewId/delete", deleteReview);

module.exports = router;
