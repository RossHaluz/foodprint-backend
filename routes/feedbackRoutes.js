const {
  createFeedback,
  deleteFeedback,
  getFeedbacks,
  getFeedbackDetails,
} = require("../controllers/feedbackController");
const { checkAuth, authorizeRole } = require("../middlewars");
const router = require("express").Router();

//Create feedback - Ok
router.post("/create", createFeedback);

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Get feedbacks - Ok
router.get("/", getFeedbacks);

//Get feedback details - Ok
router.get("/:feedbackId", getFeedbackDetails);

//Delete feedback by id - Ok
router.delete("/:feedbackId/delete", deleteFeedback);

module.exports = router;
