const {
  createLanquage,
  getLanquages,
  updateLanquage,
  deleteLanquage,
  getLanquageDetails,
} = require("../controllers/lanquageController");
const { checkAuth, authorizeRole } = require("../middlewars");
const router = require("express").Router();

//Get lanquages - Ok
router.get("/", getLanquages);

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Get lanquage details - Ok
router.get("/:lanquageId", getLanquageDetails);

//Create lanquage - Ok
router.post("/create", createLanquage);

//Update lanquage by id - Ok
router.patch("/:lanquageId/update", updateLanquage);

//Delete lanquage by id - Ok
router.delete("/:lanquageId/delete", deleteLanquage);

module.exports = router;
