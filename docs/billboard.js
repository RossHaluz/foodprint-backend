/**
 * @swagger
 * /api/billboard/{storeId}/create:
 *   post:
 *     summary: Create a new billboard for a store
 *     description: Upload a new billboard with a label and an image file for a specific store.
 *     tags:
 *       - Billboard
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
 *         description: "The ID of the store for which the billboard is being created."
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *                 example: "Q7"
 *                 description: "The label for the billboard."
 *               imageUrl:
 *                 type: string
 *                 format: binary
 *                 description: "The image file to upload for the billboard."
 *     responses:
 *       200:
 *         description: Successfully created the billboard.
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
 *                       example: "7823cded-28eb-479a-b331-b33e88a51fc1"
 *                     storeId:
 *                       type: string
 *                       example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                     label:
 *                       type: string
 *                       example: "Q7"
 *                     imageUrl:
 *                       type: string
 *                       example: "2e7b28ad-f4f2-48c8-8e5a-0bd2b7f5124f_2023-02-03_08-54-32_588.jpg"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-02T19:49:46.854Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-02T19:49:46.854Z"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid input data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid input data."
 *       401:
 *         description: Unauthorized - Missing or invalid token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error."
 */

/**
 * @swagger
 * /api/billboard/{storeId}:
 *   get:
 *     summary: Get a list of billboards for a store
 *     description: Retrieve a list of billboards (with labels and image URLs) for a specific store.
 *     tags:
 *       - Billboard
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store for which the billboards are being fetched."
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: Bearer <token>)."
 *     responses:
 *       200:
 *         description: Successfully fetched the list of billboards.
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
 *                         example: "2e0d739f-287d-4827-9f70-53565ae0bc16"
 *                       storeId:
 *                         type: string
 *                         example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                       label:
 *                         type: string
 *                         example: "Капоти"
 *                       imageUrl:
 *                         type: string
 *                         example: "a8af7b4d-3b0f-4c64-a7e5-ae1641e369b4_tim-krisztian-WX0bonKbNWw-unsplash.jpg"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-20T14:28:43.708Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T18:15:42.346Z"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid parameters or data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid parameters or data."
 *       401:
 *         description: Unauthorized - Missing or invalid token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error."
 */

/**
 * @swagger
 * /api/billboard/{storeId}/{billboardId}:
 *   get:
 *     summary: Get a specific billboard by ID for a store
 *     description: Retrieve detailed information about a specific billboard in a store using its unique ID.
 *     tags:
 *       - Billboard
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store to which the billboard belongs."
 *       - in: path
 *         name: billboardId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The unique ID of the billboard to retrieve."
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: Bearer <token>)."
 *     responses:
 *       200:
 *         description: Successfully fetched the billboard data.
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
 *                       example: "2e0d739f-287d-4827-9f70-53565ae0bc16"
 *                     storeId:
 *                       type: string
 *                       example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                     label:
 *                       type: string
 *                       example: "Капоти"
 *                     imageUrl:
 *                       type: string
 *                       example: "a8af7b4d-3b0f-4c64-a7e5-ae1641e369b4_tim-krisztian-WX0bonKbNWw-unsplash.jpg"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-20T14:28:43.708Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-29T18:15:42.346Z"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid parameters or data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid parameters or data."
 *       401:
 *         description: Unauthorized - Missing or invalid token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *       404:
 *         description: Not Found - The specified billboard could not be found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Billboard not found."
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error."
 */

/**
 * @swagger
 * /api/billboard/{storeId}/{billboardId}/update:
 *   patch:
 *     summary: Update a specific billboard for a store
 *     description: Update the details (label and image) of a specific billboard for a store.
 *     tags:
 *       - Billboard
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store to which the billboard belongs."
 *       - in: path
 *         name: billboardId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The unique ID of the billboard to update."
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: Bearer <token>)."
 *       - in: formData
 *         name: imageUrl
 *         required: true
 *         type: file
 *         description: "The new image for the billboard."
 *       - in: formData
 *         name: label
 *         required: true
 *         type: string
 *         description: "The updated label for the billboard."
 *     responses:
 *       200:
 *         description: Successfully updated the billboard.
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
 *                       example: "2e0d739f-287d-4827-9f70-53565ae0bc16"
 *                     storeId:
 *                       type: string
 *                       example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                     label:
 *                       type: string
 *                       example: "Q7 new"
 *                     imageUrl:
 *                       type: string
 *                       example: "938ee702-6584-4220-a7a0-8fbcec042fd9_2023-02-03_08-54-32_588.jpg"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-20T14:28:43.708Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-02T20:00:48.311Z"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid parameters or data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid parameters or data."
 *       401:
 *         description: Unauthorized - Missing or invalid token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *       404:
 *         description: Not Found - The specified billboard could not be found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Billboard not found."
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error."
 */

/**
 * @swagger
 * /api/billboard/{storeId}/{billboardId}/delete:
 *   delete:
 *     summary: Delete a specific billboard for a store
 *     description: Deletes a specific billboard for a store by its ID.
 *     tags:
 *       - Billboard
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store to which the billboard belongs."
 *       - in: path
 *         name: billboardId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The unique ID of the billboard to delete."
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: Bearer <token>)."
 *     responses:
 *       200:
 *         description: Successfully deleted the billboard.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     Message:
 *                       type: string
 *                       example: "Billboard success delete"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid parameters or data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid parameters or data."
 *       401:
 *         description: Unauthorized - Missing or invalid token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *       404:
 *         description: Not Found - The specified billboard could not be found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Billboard not found."
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error."
 */
