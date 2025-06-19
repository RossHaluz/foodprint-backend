const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
  getOrderDetails,
  addItemToOrder,
  removeItemFromOrder,
  updateOrderItem,
} = require("../controllers/orderController");
const { checkAuth, authorizeRole } = require("../middlewars");

const router = require("express").Router();

//Create order - Ok
router.post("/create", createOrder);

router.use(checkAuth);
router.use(authorizeRole("superadmin"));

//Get orders - Ok
router.get("/", getOrders);

//Get order details by id - Ok
router.get("/:orderId", getOrderDetails);

//Update order - Ok
router.patch("/:orderId/update", updateOrder);

//Delete order - Ok
router.delete("/:orderId/delete", deleteOrder);

//Add item to order - Ok
router.post("/:orderId/item", addItemToOrder);

//Update order item
router.put("/:orderId/item/:itemId", updateOrderItem);

//Delete item from order - Ok
router.delete("/:orderId/item/:itemId", removeItemFromOrder);

module.exports = router;
