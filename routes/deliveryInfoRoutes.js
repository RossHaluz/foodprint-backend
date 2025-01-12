const {
  createDeliveryInfo,
  getDeliveryInfo,
  updateDeliveryInfo,
} = require("../controllers/deliveryInfoController");
const { checkAuth, authorizeRole } = require("../middlewars");

const router = require("express").Router();

//Get delivery info - Ok
router.get("/", getDeliveryInfo);

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Create delivery info - Ok
router.post("/create", createDeliveryInfo);

//Update delivery info
router.patch("/:deliveryInfoId/update", updateDeliveryInfo);

module.exports = router;
