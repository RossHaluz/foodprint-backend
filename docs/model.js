/**
 * @swagger
 * /api/model/{storeId}/create:
 *   post:
 *     summary: Create a new model for a specific store
 *     description: Add a new model to the specified store by providing its name.
 *     tags:
 *       - Model
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
 *         description: "The ID of the store where the model will be created."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: "The name of the new model."
 *                 example: "Q5 8R"
 *     responses:
 *       200:
 *         description: Successfully created the model.
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
 *                       description: "The ID of the created model."
 *                       example: "fd095254-a3e9-48cc-a05f-60107f6c6161"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The creation timestamp."
 *                       example: "2024-12-10T13:13:49.894Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The last updated timestamp."
 *                       example: "2024-12-10T13:13:49.894Z"
 *                     name:
 *                       type: string
 *                       description: "The name of the model."
 *                       example: "Q5 8R"
 *                     storeId:
 *                       type: string
 *                       description: "The ID of the store where the model was created."
 *                       example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid input data.
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/model/{storeId}/{modelId}/update:
 *   patch:
 *     summary: Update a model for a specific store
 *     description: Update the details of a specific model in the specified store by providing the new name.
 *     tags:
 *       - Model
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
 *         description: "The ID of the store where the model exists."
 *       - in: path
 *         name: modelId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the model to be updated."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: "The updated name of the model."
 *                 example: "Q5 8R new"
 *     responses:
 *       200:
 *         description: Successfully updated the model.
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
 *                       description: "The ID of the updated model."
 *                       example: "15b75cc4-93a8-4b8a-ab45-f174e2199488"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The creation timestamp of the model."
 *                       example: "2024-12-10T13:16:43.940Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The last updated timestamp of the model."
 *                       example: "2024-12-10T13:17:02.411Z"
 *                     name:
 *                       type: string
 *                       description: "The updated name of the model."
 *                       example: "Q5 8R new"
 *                     storeId:
 *                       type: string
 *                       description: "The ID of the store where the model exists."
 *                       example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid input data.
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Model not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/model/{storeId}/{modelId}:
 *   get:
 *     summary: Get details of a specific model
 *     description: Retrieve detailed information about a specific model in a given store.
 *     tags:
 *       - Model
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
 *         description: "The ID of the store where the model exists."
 *       - in: path
 *         name: modelId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the model to retrieve."
 *     responses:
 *       200:
 *         description: Successfully retrieved the model details.
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
 *                       description: "The ID of the model."
 *                       example: "15b75cc4-93a8-4b8a-ab45-f174e2199488"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The creation timestamp of the model."
 *                       example: "2024-12-10T13:16:43.940Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The last updated timestamp of the model."
 *                       example: "2024-12-10T13:17:02.411Z"
 *                     name:
 *                       type: string
 *                       description: "The name of the model."
 *                       example: "Q5 8R new"
 *                     storeId:
 *                       type: string
 *                       description: "The ID of the store where the model exists."
 *                       example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Model not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/model/{storeId}:
 *   get:
 *     summary: Get a list of models for a specific store
 *     description: Retrieve a list of all models associated with a specific store.
 *     tags:
 *       - Model
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store for which to retrieve models."
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of models.
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
 *                         description: "The ID of the model."
 *                         example: "5acf78e5-4c06-41e3-acc4-75a973352ddf"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: "The creation timestamp of the model."
 *                         example: "2024-12-10T11:06:17.604Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: "The last updated timestamp of the model."
 *                         example: "2024-12-10T13:17:02.411Z"
 *                       name:
 *                         type: string
 *                         description: "The name of the model."
 *                         example: "Q7 4M new"
 *                       storeId:
 *                         type: string
 *                         description: "The ID of the store where the model exists."
 *                         example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       404:
 *         description: Store not found or no models associated with the store.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/model/{storeId}/{modelId}/delete:
 *   delete:
 *     summary: Delete a specific model
 *     description: Deletes a model associated with a specific store using its ID. Bearer token is required for authorization.
 *     tags:
 *       - Model
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           example: "Bearer <your-token>"
 *         description: "Bearer token for authorization. This is mandatory."
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store to which the model belongs."
 *       - in: path
 *         name: modelId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the model to be deleted."
 *     responses:
 *       200:
 *         description: Successfully deleted the model.
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
 *                       example: "Model success delete"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       401:
 *         description: Unauthorized. Bearer token is missing or invalid.
 *       404:
 *         description: Model not found or store not found.
 *       500:
 *         description: Internal Server Error.
 */
