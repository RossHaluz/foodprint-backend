/**
 * @swagger
 * /api/option/{storeId}/create:
 *   post:
 *     summary: Create option
 *     description: Creating a new option for a specific store
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: Token
 *         required: true
 *         schema:
 *           type: string
 *         description: Bearer token for authentication
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the store where the option is created
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Виберіть розмір"
 *               translations:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Choose a fabric"
 *                     languageCode:
 *                       type: string
 *                       example: "en"
 *                     optionId:
 *                       type: string
 *                       example: "d631fa39-be53-4d4a-bb80-0eb5a2c7c82c"
 *               optionValues:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     value:
 *                       type: string
 *                       example: "Полуторний"
 *                     translations:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           value:
 *                             type: string
 *                             example: "Polutorka"
 *                           languageCode:
 *                             type: string
 *                             example: "en"
 *                           optionValueId:
 *                             type: string
 *                             example: "9991e575-f397-46b9-9497-60b421c9e7c3"
 *     responses:
 *       200:
 *         description: Option created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "20dc5c2b-6f9c-4ae9-b51b-4865ec28ede4"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-12T19:18:44.160Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-12T19:18:44.160Z"
 *                 name:
 *                   type: string
 *                   example: "Виберіть розмір"
 *                 storeId:
 *                   type: string
 *                   example: "591414a0-3032-4b66-ab76-aa8bcacea5c4"
 *       400:
 *         description: Bad Request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid data provided"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server Error"
 */

/**
 * @swagger
 * /api/option/{storeId}/{optionId}/update:
 *   patch:
 *     summary: Update option
 *     description: Update an existing option for a specific store
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: Token
 *         required: true
 *         schema:
 *           type: string
 *         description: Bearer token for authentication
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the store where the option is located
 *       - in: path
 *         name: optionId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the option to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Виберіть розмір new"
 *               translations:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Choose a fabric"
 *                     languageCode:
 *                       type: string
 *                       example: "en"
 *                     optionId:
 *                       type: string
 *                       example: "d631fa39-be53-4d4a-bb80-0eb5a2c7c82c"
 *               optionValues:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     value:
 *                       type: string
 *                       example: "Полуторний"
 *                     translations:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           value:
 *                             type: string
 *                             example: "Polutorka"
 *                           languageCode:
 *                             type: string
 *                             example: "en"
 *                           optionValueId:
 *                             type: string
 *                             example: "9991e575-f397-46b9-9497-60b421c9e7c3"
 *     responses:
 *       200:
 *         description: Option updated successfully
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
 *                       example: "20dc5c2b-6f9c-4ae9-b51b-4865ec28ede4"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-12T19:18:44.160Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-12T19:34:32.746Z"
 *                     name:
 *                       type: string
 *                       example: "Виберіть розмір new"
 *                     storeId:
 *                       type: string
 *                       example: "591414a0-3032-4b66-ab76-aa8bcacea5c4"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid data provided"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server Error"
 */

/**
 * @swagger
 * /api/option/{storeId}/{optionId}:
 *   get:
 *     summary: Get option details by ID
 *     description: Retrieve details of an existing option for a specific store
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: Token
 *         required: true
 *         schema:
 *           type: string
 *         description: Bearer token for authentication
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the store where the option is located
 *       - in: path
 *         name: optionId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the option to retrieve
 *     responses:
 *       200:
 *         description: Option retrieved successfully
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
 *                       example: "20dc5c2b-6f9c-4ae9-b51b-4865ec28ede4"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-12T19:18:44.160Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-12T19:34:32.746Z"
 *                     name:
 *                       type: string
 *                       example: "Виберіть розмір new"
 *                     storeId:
 *                       type: string
 *                       example: "591414a0-3032-4b66-ab76-aa8bcacea5c4"
 *                     translations:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             example: "Choose a fabric"
 *                           languageCode:
 *                             type: string
 *                             example: "en"
 *                           optionId:
 *                             type: string
 *                             example: "d631fa39-be53-4d4a-bb80-0eb5a2c7c82c"
 *                     optionValues:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: "4a164a60-ecb0-4ba4-8d9c-6e53f8d4d4e6"
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-11-12T19:26:54.727Z"
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-11-12T19:26:54.727Z"
 *                           value:
 *                             type: string
 *                             example: "Полуторний"
 *                           optionId:
 *                             type: string
 *                             example: "20dc5c2b-6f9c-4ae9-b51b-4865ec28ede4"
 *                           translations:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 value:
 *                                   type: string
 *                                   example: "Polutorka"
 *                                 languageCode:
 *                                   type: string
 *                                   example: "en"
 *                                 optionValueId:
 *                                   type: string
 *                                   example: "9991e575-f397-46b9-9497-60b421c9e7c3"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid data provided"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server Error"
 */

/**
 * @swagger
 * /api/option/{storeId}:
 *   get:
 *     summary: Get options
 *     description: Retrieve all options for a specific store
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: Token
 *         required: true
 *         schema:
 *           type: string
 *         description: Bearer token for authentication
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the store where the options are located
 *     responses:
 *       200:
 *         description: Options retrieved successfully
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
 *                         example: "d631fa39-be53-4d4a-bb80-0eb5a2c7c82c"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-12T08:56:56.784Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-12T08:56:56.784Z"
 *                       name:
 *                         type: string
 *                         example: "Виберіть розмір"
 *                       storeId:
 *                         type: string
 *                         example: "591414a0-3032-4b66-ab76-aa8bcacea5c4"
 *                       translations:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                               example: "Choose a fabric"
 *                             languageCode:
 *                               type: string
 *                               example: "en"
 *                             optionId:
 *                               type: string
 *                               example: "d631fa39-be53-4d4a-bb80-0eb5a2c7c82c"
 *                       optionValues:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               example: "9991e575-f397-46b9-9497-60b421c9e7c3"
 *                             createdAt:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-11-12T08:56:56.784Z"
 *                             updatedAt:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-11-12T08:56:56.784Z"
 *                             value:
 *                               type: string
 *                               example: "Полуторний"
 *                             optionId:
 *                               type: string
 *                               example: "d631fa39-be53-4d4a-bb80-0eb5a2c7c82c"
 *                             translations:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   value:
 *                                     type: string
 *                                     example: "Polutorka"
 *                                   languageCode:
 *                                     type: string
 *                                     example: "en"
 *                                   optionValueId:
 *                                     type: string
 *                                     example: "9991e575-f397-46b9-9497-60b421c9e7c3"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid data provided"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server Error"
 */

/**
 * @swagger
 * /api/option/{storeId}/{optionId}/delete:
 *   delete:
 *     summary: Delete option by ID
 *     description: Delete a specific option for a given store. Requires authentication.
 *     tags:
 *       - Option
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Token
 *         required: true
 *         schema:
 *           type: string
 *           example: Bearer token for authentication
 *         description: Bearer token for authorization
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the store where the option is located
 *       - in: path
 *         name: optionId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the option to delete
 *     responses:
 *       200:
 *         description: Option deleted successfully
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
 *                       example: "Option deleted successfully"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid data provided"
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server Error"
 */
