const {
  createCharacteristic,
  updateCharacteristic,
  deleteCharacteristic,
  getCharacteristics,
  getCharacteristicDetails,
} = require("../controllers/characteristicController");
const { checkAuth, authorizeRole } = require("../middlewars");
const router = require("express").Router();

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Get all characteristics - Ok
router.get("/", getCharacteristics);

//Get characterictic by id - Ok
router.get("/:characteristicId", getCharacteristicDetails);

//Create new characteristic - Ok
router.post("/create", createCharacteristic);

//Update characteristic - Ok
router.patch("/:characteristicId/update", updateCharacteristic);

//Delete characterictic - Ok
router.delete("/:characteristicId/delete", deleteCharacteristic);

module.exports = router;
