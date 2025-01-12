/**
 * @swagger
 * /api/order/{storeId}/create:
 *   post:
 *     summary: Create a new order
 *     description: Creates a new order for a specific store.
 *     tags:
 *       - Order
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the store."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: "The first name of the customer."
 *                 example: "Rostyslav"
 *               lastName:
 *                 type: string
 *                 description: "The last name of the customer."
 *                 example: "Haluzinskyi"
 *               address:
 *                 type: string
 *                 description: "The delivery address (can be empty)."
 *                 example: ""
 *               paymentMethod:
 *                 type: string
 *                 description: "The payment method for the order."
 *                 example: "monobank"
 *               postService:
 *                 type: string
 *                 description: "The post service for delivery."
 *                 example: "nova-poshta"
 *               city:
 *                 type: string
 *                 description: "The city for delivery."
 *                 example: "Хмельницький"
 *               isPaid:
 *                 type: boolean
 *                 description: "Indicates whether the order is paid."
 *                 example: false
 *               phone:
 *                 type: string
 *                 description: "The customer's phone number."
 *                 example: "0965033030"
 *               email:
 *                 type: string
 *                 description: "The customer's email address."
 *                 example: "test@gmail.com"
 *     responses:
 *       200:
 *         description: Successfully created a new order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the created order."
 *                       example: "7ffa1031-8511-4fd2-9e14-046ba9ddca22"
 *                     storeId:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the store."
 *                       example: "34559779-0a3c-49e7-ab8e-913efc3895bc"
 *                     isPaid:
 *                       type: boolean
 *                       description: "Indicates whether the order is paid."
 *                       example: false
 *                     city:
 *                       type: string
 *                       description: "The city for delivery."
 *                       example: "Хмельницький"
 *                     firstName:
 *                       type: string
 *                       description: "The first name of the customer."
 *                       example: "Rostyslav"
 *                     lastName:
 *                       type: string
 *                       description: "The last name of the customer."
 *                       example: "Haluzinskyi"
 *                     phone:
 *                       type: string
 *                       description: "The customer's phone number."
 *                       example: "0965033030"
 *                     email:
 *                       type: string
 *                       description: "The customer's email address."
 *                       example: "test@gmail.com"
 *                     paymentMethod:
 *                       type: string
 *                       description: "The payment method for the order."
 *                       example: "monobank"
 *                     orderStatus:
 *                       type: string
 *                       description: "Defoult value `new` but can be: pending, success, reject"
 *                       example: "new"
 *                     postService:
 *                       type: string
 *                       description: "The post service for delivery."
 *                       example: "nova-poshta"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The date and time when the order was created."
 *                       example: "2024-12-05T08:58:06.255Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The date and time when the order was last updated."
 *                       example: "2024-12-05T08:58:06.255Z"
 *                   description: "Details of the created order."
 *                 message:
 *                   type: string
 *                   description: "A success message."
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   description: "The status of the operation."
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid input data.
 *       500:
 *         description: Internal Server Error - Unexpected error occurred.
 */

/**
 * @swagger
 * /api/order/{storeId}/{orderId}/update:
 *   patch:
 *     summary: Update an order
 *     description: Updates the details of an existing order for a specific store.
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the store."
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the order."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: "The first name of the customer."
 *                 example: "Rostyslav"
 *               lastName:
 *                 type: string
 *                 description: "The last name of the customer."
 *                 example: "Haluzinskyi"
 *               address:
 *                 type: string
 *                 description: "The delivery address (can be empty)."
 *                 example: ""
 *               paymentMethod:
 *                 type: string
 *                 description: "The payment method for the order."
 *                 example: "monobank"
 *               postService:
 *                 type: string
 *                 description: "The post service for delivery."
 *                 example: "nova-poshta"
 *               city:
 *                 type: string
 *                 description: "The city for delivery."
 *                 example: "Хмельницький"
 *               isPaid:
 *                 type: boolean
 *                 description: "Indicates whether the order is paid."
 *                 example: false
 *               phone:
 *                 type: string
 *                 description: "The customer's phone number."
 *                 example: "0965033030"
 *               email:
 *                 type: string
 *                 description: "The customer's email address."
 *                 example: "test@gmail.com"
 *               orderStatus:
 *                 type: string
 *                 description: "The status of the order."
 *                 example: "pending"
 *     responses:
 *       200:
 *         description: Successfully updated the order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the order."
 *                       example: "1d42be57-3351-444e-93c1-8e22d79f09c9"
 *                     storeId:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the store."
 *                       example: "68829e45-cdf2-424c-b847-fdaaa118e883"
 *                     isPaid:
 *                       type: boolean
 *                       description: "Indicates whether the order is paid."
 *                       example: false
 *                     city:
 *                       type: string
 *                       description: "The city for delivery."
 *                       example: "Хмельницький"
 *                     firstName:
 *                       type: string
 *                       description: "The first name of the customer."
 *                       example: "Rostyslav"
 *                     lastName:
 *                       type: string
 *                       description: "The last name of the customer."
 *                       example: "Haluzinskyi"
 *                     phone:
 *                       type: string
 *                       description: "The customer's phone number."
 *                       example: "0965033030"
 *                     email:
 *                       type: string
 *                       description: "The customer's email address."
 *                       example: "test@gmail.com"
 *                     paymentMethod:
 *                       type: string
 *                       description: "The payment method for the order."
 *                       example: "monobank"
 *                     postService:
 *                       type: string
 *                       description: "The post service for delivery."
 *                       example: "nova-poshta"
 *                     orderStatus:
 *                       type: string
 *                       description: "The status of the order."
 *                       example: "pending"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The date and time when the order was created."
 *                       example: "2024-12-26T07:40:37.399Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The date and time when the order was last updated."
 *                       example: "2024-12-26T07:42:51.889Z"
 *                 message:
 *                   type: string
 *                   description: "A success message."
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   description: "The status of the operation."
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid input data.
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       500:
 *         description: Internal Server Error - Unexpected error occurred.
 */

/**
 * @swagger
 * /api/order/{storeId}/{orderId}/update:
 *   patch:
 *     summary: Update an order
 *     description: Updates the details of an existing order for a specific store.
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: Bearer <token>)."
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the store."
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the order to update."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: "The updated first name of the customer."
 *                 example: "Rostyslav"
 *               lastName:
 *                 type: string
 *                 description: "The updated last name of the customer."
 *                 example: "Haluzinskyi"
 *               address:
 *                 type: string
 *                 description: "The updated delivery address (can be empty)."
 *                 example: ""
 *               paymentMethod:
 *                 type: string
 *                 description: "The updated payment method for the order."
 *                 example: "cashOnDelivary"
 *               postService:
 *                 type: string
 *                 description: "The updated post service for delivery."
 *                 example: "nova-poshta"
 *               city:
 *                 type: string
 *                 description: "The updated city for delivery."
 *                 example: "Хмельницький"
 *               isPaid:
 *                 type: boolean
 *                 description: "Indicates whether the order is paid."
 *                 example: false
 *               phone:
 *                 type: string
 *                 description: "The updated customer's phone number."
 *                 example: "0965033030"
 *               email:
 *                 type: string
 *                 description: "The updated customer's email address."
 *                 example: "test@gmail.com"
 *     responses:
 *       200:
 *         description: Successfully updated the order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the order."
 *                       example: "7ffa1031-8511-4fd2-9e14-046ba9ddca22"
 *                     storeId:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the store."
 *                       example: "34559779-0a3c-49e7-ab8e-913efc3895bc"
 *                     isPaid:
 *                       type: boolean
 *                       description: "Indicates whether the order is paid."
 *                       example: false
 *                     city:
 *                       type: string
 *                       description: "The updated city for delivery."
 *                       example: "Хмельницький"
 *                     firstName:
 *                       type: string
 *                       description: "The updated first name of the customer."
 *                       example: "Rostyslav"
 *                     lastName:
 *                       type: string
 *                       description: "The updated last name of the customer."
 *                       example: "Haluzinskyi"
 *                     phone:
 *                       type: string
 *                       description: "The updated customer's phone number."
 *                       example: "0965033030"
 *                     email:
 *                       type: string
 *                       description: "The updated customer's email address."
 *                       example: "test@gmail.com"
 *                     paymentMethod:
 *                       type: string
 *                       description: "The updated payment method for the order."
 *                       example: "cashOnDelivary"
 *                     postService:
 *                       type: string
 *                       description: "The updated post service for delivery."
 *                       example: "nova-poshta"
 *                     orderStatus:
 *                       type: string
 *                       description: "Defoult value `new` but can be: pending, success, reject"
 *                       example: "new"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The date and time when the order was created."
 *                       example: "2024-12-05T08:58:06.255Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The date and time when the order was last updated."
 *                       example: "2024-12-05T09:03:39.230Z"
 *                   description: "Details of the updated order."
 *                 message:
 *                   type: string
 *                   description: "A success message."
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   description: "The status of the operation."
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid input data.
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Not Found - Order or store not found.
 *       500:
 *         description: Internal Server Error - Unexpected error occurred.
 */

/**
 * @swagger
 * /api/order/{storeId}/{orderId}:
 *   get:
 *     summary: Retrieve a specific order
 *     description: Fetch details of a specific order using its ID for a given store.
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: Bearer <token>)."
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the store."
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the order."
 *     responses:
 *       200:
 *         description: Successfully retrieved the order details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the order."
 *                       example: "7ffa1031-8511-4fd2-9e14-046ba9ddca22"
 *                     storeId:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the store."
 *                       example: "34559779-0a3c-49e7-ab8e-913efc3895bc"
 *                     isPaid:
 *                       type: boolean
 *                       description: "Indicates whether the order is paid."
 *                       example: false
 *                     city:
 *                       type: string
 *                       description: "The city for delivery."
 *                       example: "Хмельницький"
 *                     firstName:
 *                       type: string
 *                       description: "The first name of the customer."
 *                       example: "Rostyslav"
 *                     lastName:
 *                       type: string
 *                       description: "The last name of the customer."
 *                       example: "Haluzinskyi"
 *                     phone:
 *                       type: string
 *                       description: "The customer's phone number."
 *                       example: "0965033030"
 *                     email:
 *                       type: string
 *                       description: "The customer's email address."
 *                       example: "test@gmail.com"
 *                     paymentMethod:
 *                       type: string
 *                       description: "The payment method for the order."
 *                       example: "cashOnDelivary"
 *                     postService:
 *                       type: string
 *                       description: "The post service for delivery."
 *                       example: "nova-poshta"
 *                     orderStatus:
 *                       type: string
 *                       description: "Defoult value `new` but can be: pending, success, reject"
 *                       example: "new"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The date and time when the order was created."
 *                       example: "2024-12-05T08:58:06.255Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The date and time when the order was last updated."
 *                       example: "2024-12-05T09:03:39.230Z"
 *                     userId:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the user associated with the order."
 *                       example: "24e1ba3c-9bcd-4bf7-aeb5-654126bfbb99"
 *                     orderItems:
 *                       type: array
 *                       items:
 *                         type: object
 *                       description: "A list of items in the order."
 *                       example: []
 *                 message:
 *                   type: string
 *                   description: "A success message."
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   description: "The status of the operation."
 *                   example: "success"
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Not Found - Order or store not found.
 *       500:
 *         description: Internal Server Error - Unexpected error occurred.
 */

/**
 * @swagger
 * /api/order/{storeId}:
 *   get:
 *     summary: Retrieve all orders for a store
 *     description: Fetch a list of all orders associated with a specific store. Optionally filter orders by their status.
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: Bearer <token>)."
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the store."
 *       - in: query
 *         name: orderStatus
 *         required: false
 *         schema:
 *           type: string
 *           enum: [new, pending, success, reject]
 *         description: "Filter orders by their status."
 *     responses:
 *       200:
 *         description: Successfully retrieved all orders for the store.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                         description: "The unique identifier of the order."
 *                         example: "7ffa1031-8511-4fd2-9e14-046ba9ddca22"
 *                       storeId:
 *                         type: string
 *                         format: uuid
 *                         description: "The unique identifier of the store."
 *                         example: "34559779-0a3c-49e7-ab8e-913efc3895bc"
 *                       isPaid:
 *                         type: boolean
 *                         description: "Indicates whether the order is paid."
 *                         example: false
 *                       city:
 *                         type: string
 *                         description: "The city for delivery."
 *                         example: "Хмельницький"
 *                       firstName:
 *                         type: string
 *                         description: "The first name of the customer."
 *                         example: "Ростислав"
 *                       lastName:
 *                         type: string
 *                         description: "The last name of the customer."
 *                         example: "Галузінський"
 *                       phone:
 *                         type: string
 *                         description: "The customer's phone number."
 *                         example: "0964009130"
 *                       email:
 *                         type: string
 *                         description: "The customer's email address."
 *                         example: "rossgaluzinskiy@gmail.com"
 *                       paymentMethod:
 *                         type: string
 *                         description: "The payment method for the order."
 *                         example: "cashOnDelivary"
 *                       comment:
 *                         type: string
 *                         description: "Additional comments for the order."
 *                         example: ""
 *                       orderNumber:
 *                         type: string
 *                         description: "The unique order number."
 *                         example: "1"
 *                       invoiceId:
 *                         type: string
 *                         description: "The invoice identifier for the order."
 *                         example: ""
 *                       postService:
 *                         type: string
 *                         description: "The post service for delivery."
 *                         example: "nova-poshta"
 *                       orderStatus:
 *                         type: string
 *                         description: "The status of the order (new, pending, success, reject)."
 *                         example: "new"
 *                       separation:
 *                         type: string
 *                         description: "Delivery separation details."
 *                         example: ""
 *                       address:
 *                         type: string
 *                         description: "The delivery address (if specified)."
 *                         example: ""
 *                       typeDelivary:
 *                         type: string
 *                         description: "The type of delivery."
 *                         example: "Доставка у відділення"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: "The date and time when the order was created."
 *                         example: "2024-12-04T12:51:36.101Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: "The date and time when the order was last updated."
 *                         example: "2024-12-04T12:51:36.101Z"
 *                       userId:
 *                         type: string
 *                         format: uuid
 *                         description: "The unique identifier of the user associated with the order."
 *                         example: "24e1ba3c-9bcd-4bf7-aeb5-654126bfbb99"
 *                       orderItems:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               format: uuid
 *                               description: "The unique identifier of the order item."
 *                               example: "f5d3a351-2af1-4a57-9c9e-1c5bb123ea9d"
 *                             productId:
 *                               type: string
 *                               format: uuid
 *                               description: "The unique identifier of the product."
 *                               example: "a6bbd769-4dd7-40a6-a10b-b88bc1e93f78"
 *                             quantity:
 *                               type: integer
 *                               description: "The quantity of the product in the order."
 *                               example: 2
 *                             price:
 *                               type: number
 *                               format: float
 *                               description: "The price of the product."
 *                               example: 150.0
 *                 message:
 *                   type: string
 *                   description: "A success message."
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   description: "The status of the operation."
 *                   example: "success"
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Not Found - Store not found or no orders exist.
 *       500:
 *         description: Internal Server Error - Unexpected error occurred.
 */

/**
 * @swagger
 * /api/order/{storeId}/{orderId}/item:
 *   post:
 *     summary: Add a product to an order
 *     description: Add a product to a specific order by providing the product ID and quantity.
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: Bearer <token>)."
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the store."
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the order."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 format: uuid
 *                 description: "The unique identifier of the product to add."
 *                 example: "52621fa8-8d00-44b7-874f-40d6290f6f95"
 *               quantity:
 *                 type: integer
 *                 description: "The quantity of the product to add."
 *                 example: 1
 *     responses:
 *       200:
 *         description: Successfully added the product to the order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the order item."
 *                       example: "61c79383-009c-4f1a-b36b-7bad3da366d4"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The date and time when the order item was created."
 *                       example: "2024-12-05T09:18:39.350Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The date and time when the order item was last updated."
 *                       example: "2024-12-05T09:18:39.350Z"
 *                     orderId:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the order."
 *                       example: "6c4d5fca-1ae6-4763-bc9e-f453e459fc26"
 *                     productId:
 *                       type: string
 *                       format: uuid
 *                       description: "The unique identifier of the product added to the order."
 *                       example: "52621fa8-8d00-44b7-874f-40d6290f6f95"
 *                     quantity:
 *                       type: integer
 *                       description: "The quantity of the product added to the order."
 *                       example: 1
 *                 message:
 *                   type: string
 *                   description: "A success message."
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   description: "The status of the operation."
 *                   example: "success"
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Not Found - Order or product not found.
 *       400:
 *         description: Bad Request - Invalid input or validation error.
 *       500:
 *         description: Internal Server Error - Unexpected error occurred.
 */

/**
 * @swagger
 * /api/order/{storeId}/{orderId}/item/{itemId}:
 *   delete:
 *     summary: Remove a product from an order
 *     description: Deletes a specific product from an order by providing the item ID.
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: Bearer <token>)."
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the store."
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the order."
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the order item to remove."
 *     responses:
 *       200:
 *         description: Successfully removed the product from the order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: "A success message indicating the product was removed."
 *                       example: "The product has been successfully removed from the order"
 *                 message:
 *                   type: string
 *                   description: "The status of the operation."
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   description: "The status slug."
 *                   example: "success"
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Not Found - Order or item not found.
 *       500:
 *         description: Internal Server Error - Unexpected error occurred.
 */

/**
 * @swagger
 * /api/order/{storeId}/{orderId}/delete:
 *   delete:
 *     summary: Delete an order
 *     description: Deletes a specific order by providing the store ID and order ID.
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: Bearer <token>)."
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the store."
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "The unique identifier of the order to delete."
 *     responses:
 *       200:
 *         description: Successfully deleted the order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: "A success message indicating the order was deleted."
 *                       example: "Order success delete"
 *                 message:
 *                   type: string
 *                   description: "The status of the operation."
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   description: "The status slug."
 *                   example: "success"
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Not Found - Order not found.
 *       500:
 *         description: Internal Server Error - Unexpected error occurred.
 */
