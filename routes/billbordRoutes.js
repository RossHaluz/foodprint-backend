const {
  createBillboard,
  getAllBillboards,
  updateBillboard,
  deleteBillboard,
  getBillboardDetails,
} = require("../controllers/billdoardController");
const { checkAuth, authorizeRole, upload } = require("../middlewars");
const router = require("express").Router();

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Get all billboards - Ok
router.get("/", getAllBillboards);

//Create billdoard - Ok
router.post("/create", upload.single("imageUrl"), createBillboard);

//Update billboard - Ok
router.patch(
  "/:billboardId/update",
  upload.single("imageUrl"),
  updateBillboard
);

//Delete billboard - Ok
router.delete("/:billboardId/delete", deleteBillboard);

//Get billboard - Ok
router.get("/:billboardId", getBillboardDetails);

module.exports = router;
