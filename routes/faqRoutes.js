const {
  getFags,
  createFaq,
  getFaqDetails,
  updateFaq,
  deleteFaq,
} = require("../controllers/faqController");
const { checkAuth, authorizeRole } = require("../middlewars");
const router = require("express").Router();

//Get faqs - Ok
router.get("/", getFags);

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Create faq - Ok
router.post("/create", createFaq);

//Get faq details - Ok
router.get("/:faqId", getFaqDetails);

//Update faq - Ok
router.patch("/:faqId/update", updateFaq);

//Delete faq - Ok
router.delete("/:faqId/delete", deleteFaq);

module.exports = router;
