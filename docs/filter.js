/**
 * @swagger
 * /api/filter/{storeId}/create:
 *   post:
 *     summary: Create filter
 *     description: Creating a new filter for a specific store
 *     tags:
 *       - Filter
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: Bearer token for authentication
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the store where the filter is created
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Стан"
 *               type:
 *                 type: string
 *                 example: "radio"
 *               translations:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     languageCode:
 *                       type: string
 *                       example: "en"
 *                     name:
 *                       type: string
 *                       example: "Stan"
 *               filterOptions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Новий"
 *                     translations:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           languageCode:
 *                             type: string
 *                             example: "en"
 *                           name:
 *                             type: string
 *                             example: "New"
 *     responses:
 *       200:
 *         description: Filter created successfully
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
 *                       example: "906eb871-2c35-4ea1-8770-cc60a7dbc93d"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-02T18:01:09.269Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-02T18:01:09.269Z"
 *                     name:
 *                       type: string
 *                       example: "Стан"
 *                     type:
 *                       type: string
 *                       example: "radio"
 *                     storeId:
 *                       type: string
 *                       example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
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
 * /api/filter/{storeId}:
 *   get:
 *     summary: Get filters for a specific store
 *     description: Retrieve filters and their options for a specified store. Requires a valid Bearer token.
 *     tags:
 *       - Filter
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the store to retrieve filters for.
 *     responses:
 *       200:
 *         description: Successful retrieval of filters.
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
 *                         example: "71c3510c-0894-4a7c-be0a-3aed2f8bc53a"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-21T09:37:31.877Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-27T16:07:30.317Z"
 *                       name:
 *                         type: string
 *                         example: "Стан"
 *                       type:
 *                         type: string
 *                         example: "radio"
 *                       storeId:
 *                         type: string
 *                         example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                       translations:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               example: "f5e984ac-de01-446a-8ade-8ac9abbcb1fc"
 *                             createdAt:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-12-02T18:01:09.269Z"
 *                             updatedAt:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-12-02T18:01:09.269Z"
 *                             name:
 *                               type: string
 *                               example: "Stan"
 *                             languageCode:
 *                               type: string
 *                               example: "en"
 *                       filterOptions:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               example: "69f7ddb2-3a68-4d18-aecf-662093ded287"
 *                             createdAt:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-11-27T16:07:30.317Z"
 *                             updatedAt:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-11-27T16:07:30.317Z"
 *                             name:
 *                               type: string
 *                               example: "Новий"
 *                             filterId:
 *                               type: string
 *                               example: "71c3510c-0894-4a7c-be0a-3aed2f8bc53a"
 *                             translations:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   id:
 *                                     type: string
 *                                     example: "3eb6752c-6634-4da0-9f63-32b6c0c54003"
 *                                   createdAt:
 *                                     type: string
 *                                     format: date-time
 *                                     example: "2024-12-02T18:01:09.269Z"
 *                                   updatedAt:
 *                                     type: string
 *                                     format: date-time
 *                                     example: "2024-12-02T18:01:09.269Z"
 *                                   name:
 *                                     type: string
 *                                     example: "New"
 *                                   languageCode:
 *                                     type: string
 *                                     example: "en"
 *                                   filterOptionId:
 *                                     type: string
 *                                     example: "a8c4df1f-f71a-4fe1-b4c3-848b681ffa20"
 *                             filter:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: string
 *                                   example: "71c3510c-0894-4a7c-be0a-3aed2f8bc53a"
 *                                 createdAt:
 *                                   type: string
 *                                   format: date-time
 *                                   example: "2024-11-21T09:37:31.877Z"
 *                                 updatedAt:
 *                                   type: string
 *                                   format: date-time
 *                                   example: "2024-11-27T16:07:30.317Z"
 *                                 name:
 *                                   type: string
 *                                   example: "Стан"
 *                                 type:
 *                                   type: string
 *                                   example: "radio"
 *                                 storeId:
 *                                   type: string
 *                                   example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
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
 *                   example: "Invalid storeId provided."
 *       401:
 *         description: Unauthorized - A valid Bearer token is required.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access. Bearer token is missing or invalid."
 *       500:
 *         description: Internal Server Error
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
 * /api/filter/{storeId}/{filterId}:
 *   get:
 *     summary: Get a specific filter and its options
 *     description: Retrieve details of a specific filter and its associated options for a given store.
 *     tags:
 *       - Filter
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the store to which the filter belongs.
 *       - in: path
 *         name: filterId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the filter to retrieve.
 *     responses:
 *       200:
 *         description: Successful retrieval of the filter and its options.
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
 *                       example: "71c3510c-0894-4a7c-be0a-3aed2f8bc53a"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-21T09:37:31.877Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-27T16:07:30.317Z"
 *                     name:
 *                       type: string
 *                       example: "Стан"
 *                     type:
 *                       type: string
 *                       example: "radio"
 *                     storeId:
 *                       type: string
 *                       example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                     translations:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: "f5e984ac-de01-446a-8ade-8ac9abbcb1fc"
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-12-02T18:01:09.269Z"
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-12-02T18:01:09.269Z"
 *                           name:
 *                             type: string
 *                             example: "State"
 *                           languageCode:
 *                             type: string
 *                             example: "en"
 *                     filterOptions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: "69f7ddb2-3a68-4d18-aecf-662093ded287"
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-11-27T16:07:30.317Z"
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-11-27T16:07:30.317Z"
 *                           name:
 *                             type: string
 *                             example: "Нове"
 *                           filterId:
 *                             type: string
 *                             example: "71c3510c-0894-4a7c-be0a-3aed2f8bc53a"
 *                           translations:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: string
 *                                   example: "3eb6752c-6634-4da0-9f63-32b6c0c54003"
 *                                 createdAt:
 *                                   type: string
 *                                   format: date-time
 *                                   example: "2024-12-02T18:01:09.269Z"
 *                                 updatedAt:
 *                                   type: string
 *                                   format: date-time
 *                                   example: "2024-12-02T18:01:09.269Z"
 *                                 name:
 *                                   type: string
 *                                   example: "New"
 *                                 languageCode:
 *                                   type: string
 *                                   example: "en"
 *                                 filterOptionId:
 *                                   type: string
 *                                   example: "a8c4df1f-f71a-4fe1-b4c3-848b681ffa20"
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
 *                   example: "Invalid storeId or filterId provided."
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
 * /api/filter/{storeId}/{filterId}/update:
 *   patch:
 *     summary: Update a specific filter for a store
 *     description: Update the name, type, translations, and filter options for a specific filter within a store.
 *     tags:
 *       - Filter
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: 'Bearer <token>')."
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the store where the filter belongs.
 *       - in: path
 *         name: filterId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the filter to be updated.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Стан new"
 *               type:
 *                 type: string
 *                 example: "radio"
 *               translations:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     languageCode:
 *                       type: string
 *                       example: "en"
 *                     name:
 *                       type: string
 *                       example: "Stan new"
 *               filterOptions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Новий"
 *                     translations:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           languageCode:
 *                             type: string
 *                             example: "en"
 *                           name:
 *                             type: string
 *                             example: "New"
 *     responses:
 *       200:
 *         description: Successfully updated the filter.
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
 *                       example: "71c3510c-0894-4a7c-be0a-3aed2f8bc53a"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-21T09:37:31.877Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-02T19:22:50.619Z"
 *                     name:
 *                       type: string
 *                       example: "Стан new"
 *                     type:
 *                       type: string
 *                       example: "radio"
 *                     storeId:
 *                       type: string
 *                       example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
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
 *                   example: "Invalid filter ID or input data."
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
 * /api/filter/{storeId}/{filterId}/delete:
 *   delete:
 *     summary: Delete a specific filter for a store
 *     description: Remove a specific filter from a store by providing its store ID and filter ID.
 *     tags:
 *       - Filter
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: "Bearer token for authorization (format: 'Bearer <token>')."
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the store where the filter belongs.
 *       - in: path
 *         name: filterId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the filter to be deleted.
 *     responses:
 *       200:
 *         description: Successfully deleted the filter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Filter success delete"
 *       400:
 *         description: Bad Request - Invalid input data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid filter ID or store ID."
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
 *         description: Not Found - Filter not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Filter not found."
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
