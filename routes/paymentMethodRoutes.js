const {
  getPaymethMethod,
  createPaymenthMethod,
  updatePaymenthMethod,
} = require("../controllers/paymenthMethodController");
const { checkAuth, authorizeRole } = require("../middlewars");
const router = require("express").Router();

//Get paymeth method - Ok
router.get("/", getPaymethMethod);

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Create paymenth method - Ok
router.post("/create", createPaymenthMethod);

//Update paymenth method
router.patch("/:paymentId/update", updatePaymenthMethod);

module.exports = router;
