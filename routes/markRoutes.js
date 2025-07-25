const {
  addMark,
  updateMark,
  deleteMark,
  allMarks,
  getMarkDetails,
} = require("../controllers/markController");
const { checkAuth, authorizeRole } = require("../middlewars");

const router = require("express").Router();

//Get all marks
router.get("/", allMarks);


router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Get mark details
router.get("/:markId", getMarkDetails);

//Add mark
router.post("/", addMark);

//Update mark
router.put("/:markId", updateMark);

//Delete mark
router.delete("/:markId", deleteMark);

module.exports = router;
