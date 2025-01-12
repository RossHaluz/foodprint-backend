/**
 * @swagger
 * /api/category/{storeId}/create:
 *   post:
 *     summary: Create a new category for a store
 *     description: Creates a new category for a store. You can specify if the category is a main category or a subcategory.
 *     tags:
 *       - Category
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store where the category will be created."
 *       - in: body
 *         name: category
 *         required: true
 *         description: "Category details."
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Q7 4L"
 *               description: "The name of the category."
 *             billboardId:
 *               type: string
 *               example: "182d4c54-d012-44f2-adcb-0ae7c5c85cc7"
 *               description: "The ID of the associated billboard."
 *             parentId:
 *               type: string
 *               nullable: true
 *               example: ""
 *               description: "The parent category ID. If this is a main category, it can be empty."
 *             type:
 *               type: string
 *               enum:
 *                 - main
 *                 - subcategory
 *               example: "main"
 *               description: "The type of category. Can be either 'main' or 'subcategory'."
 *     responses:
 *       200:
 *         description: Successfully created the category.
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
 *                       example: "1ba71d42-e8b2-43a3-bb9f-e47f65fe408a"
 *                     storeId:
 *                       type: string
 *                       example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                     billboardId:
 *                       type: string
 *                       example: "182d4c54-d012-44f2-adcb-0ae7c5c85cc7"
 *                     name:
 *                       type: string
 *                       example: "Q7 4L"
 *                     type:
 *                       type: string
 *                       example: "main"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-02T20:09:54.440Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-02T20:09:54.440Z"
 *                     parentId:
 *                       type: string
 *                       nullable: true
 *                       example: null
 *                     maxPrice:
 *                       type: number
 *                       nullable: true
 *                       example: null
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
 * /api/category/{storeId}:
 *   get:
 *     summary: Get categories for a store
 *     description: Fetches all categories for a specified store, including subcategories, products, and billboards.
 *     tags:
 *       - Category
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store for which categories are being fetched."
 *     responses:
 *       200:
 *         description: Successfully fetched the categories.
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
 *                         example: "a0f507b3-8179-49a0-a309-f4fdf417cd25"
 *                       storeId:
 *                         type: string
 *                         example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                       billboardId:
 *                         type: string
 *                         example: "046fc6b3-5d1f-403c-bf2a-0d6417bc4b35"
 *                       name:
 *                         type: string
 *                         example: "Бампера"
 *                       type:
 *                         type: string
 *                         enum: [main, subcategory]
 *                         example: "main"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-20T14:49:39.769Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-20T14:49:39.769Z"
 *                       parentId:
 *                         type: string
 *                         nullable: true
 *                         example: null
 *                       maxPrice:
 *                         type: number
 *                         nullable: true
 *                         example: null
 *                       billboard:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: "046fc6b3-5d1f-403c-bf2a-0d6417bc4b35"
 *                           storeId:
 *                             type: string
 *                             example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                           label:
 *                             type: string
 *                             example: "Бампера"
 *                           imageUrl:
 *                             type: string
 *                             example: "c7dceb42-89eb-4d53-b7af-76460adaf6b1_deniz-demirci-2kMbZ4UH5Z8-unsplash.jpg"
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-11-20T14:49:03.079Z"
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-11-20T14:49:03.079Z"
 *                       products:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               example: "5322cd0f-5cfd-4c2b-9890-be13cd89ce01"
 *                             productId:
 *                               type: string
 *                               example: "f7f008e3-3b30-4c04-84b8-a24fda6f3093"
 *                             categoryId:
 *                               type: string
 *                               example: "a0f507b3-8179-49a0-a309-f4fdf417cd25"
 *                             createdAt:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-11-29T18:09:26.938Z"
 *                             updatedAt:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-11-29T18:09:26.938Z"
 *                       children:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               example: "275a3ef7-6963-412d-bcf3-ad56bda0078d"
 *                             storeId:
 *                               type: string
 *                               example: "076d9274-754a-4bcf-9b34-8fccdb273a4c"
 *                             billboardId:
 *                               type: string
 *                               example: "69576a77-45ab-4f1d-a508-e7a5e8cf0bd2"
 *                             name:
 *                               type: string
 *                               example: "Q7"
 *                             type:
 *                               type: string
 *                               enum: [main, subcategory]
 *                               example: "subcategory"
 *                             createdAt:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-11-29T17:16:24.261Z"
 *                             updatedAt:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-11-29T20:57:12.193Z"
 *                             parentId:
 *                               type: string
 *                               example: "a0f507b3-8179-49a0-a309-f4fdf417cd25"
 *                             maxPrice:
 *                               type: number
 *                               nullable: true
 *                               example: null
 *                             children:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   id:
 *                                     type: string
 *                                     example: "8d1d8db9-d54f-4738-809d-a3f83dec1985"
 *                                   name:
 *                                     type: string
 *                                     example: "4M (до 2015)"
 *                                   type:
 *                                     type: string
 *                                     enum: [main, subcategory]
 *                                     example: "subcategory"
 *                                   parentId:
 *                                     type: string
 *                                     example: "275a3ef7-6963-412d-bcf3-ad56bda0078d"
 *                                   maxPrice:
 *                                     type: number
 *                                     nullable: true
 *                                     example: null
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
 *       404:
 *         description: Not Found - No categories found for the store.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Categories not found for the specified store."
 *       500:
 *         description: Internal Server Error - Something went wrong on the server.
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
 * /api/category/{storeId}/{categoryId}:
 *   get:
 *     summary: Retrieve category details
 *     description: Fetch detailed information about a specific category, including its subcategories, associated billboard, and metadata.
 *     tags:
 *       - Category
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store to which the category belongs."
 *       - in: path
 *         name: categoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the category to retrieve."
 *     responses:
 *       200:
 *         description: Successfully retrieved the category details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     category:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "c59cabb1-bd6d-426b-bd02-067370f18866"
 *                         storeId:
 *                           type: string
 *                           example: "34559779-0a3c-49e7-ab8e-913efc3895bc"
 *                         billboardId:
 *                           type: string
 *                           example: "5ed43e2c-9aa8-480f-9e91-aae874b43a4d"
 *                         name:
 *                           type: string
 *                           example: "Капот"
 *                         type:
 *                           type: string
 *                           example: "main"
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-12-04T10:18:51.703Z"
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-12-04T10:18:51.703Z"
 *                         parentId:
 *                           type: string
 *                           nullable: true
 *                           example: null
 *                         maxPrice:
 *                           type: number
 *                           nullable: true
 *                           example: null
 *                         children:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: string
 *                                 example: "36d057d3-9291-47ee-a87b-98c34eabc5eb"
 *                               storeId:
 *                                 type: string
 *                                 example: "34559779-0a3c-49e7-ab8e-913efc3895bc"
 *                               billboardId:
 *                                 type: string
 *                                 example: "92a55846-2444-42c4-b8bf-80e2c600e217"
 *                               name:
 *                                 type: string
 *                                 example: "Q7"
 *                               type:
 *                                 type: string
 *                                 example: "subcategory"
 *                               createdAt:
 *                                 type: string
 *                                 format: date-time
 *                                 example: "2024-12-04T10:25:46.629Z"
 *                               updatedAt:
 *                                 type: string
 *                                 format: date-time
 *                                 example: "2024-12-04T10:25:46.629Z"
 *                               parentId:
 *                                 type: string
 *                                 example: "c59cabb1-bd6d-426b-bd02-067370f18866"
 *                               maxPrice:
 *                                 type: number
 *                                 nullable: true
 *                                 example: null
 *                               billboard:
 *                                 type: object
 *                                 properties:
 *                                   id:
 *                                     type: string
 *                                     example: "92a55846-2444-42c4-b8bf-80e2c600e217"
 *                                   storeId:
 *                                     type: string
 *                                     example: "34559779-0a3c-49e7-ab8e-913efc3895bc"
 *                                   label:
 *                                     type: string
 *                                     example: "Q7 4M"
 *                                   imageUrl:
 *                                     type: string
 *                                     example: "4b6dd342-5529-4dc3-8b4c-01117dc4cc22_2023-02-03_08-54-32_588.jpg"
 *                                   createdAt:
 *                                     type: string
 *                                     format: date-time
 *                                     example: "2024-12-04T10:19:12.968Z"
 *                                   updatedAt:
 *                                     type: string
 *                                     format: date-time
 *                                     example: "2024-12-04T10:19:12.968Z"
 *                         products:
 *                           type: array
 *                           items:
 *                             type: object
 *                   meta:
 *                     type: object
 *                     properties:
 *                       page:
 *                         type: number
 *                         example: 1
 *                       pageSize:
 *                         type: number
 *                         example: 10
 *                       totalItem:
 *                         type: number
 *                         example: 0
 *                       totalPages:
 *                         type: number
 *                         example: 0
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid parameters."
 *       401:
 *         description: Unauthorized - Invalid or missing token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *       404:
 *         description: Not Found - Category not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category not found."
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
 * /api/category/{storeId}/{categoryId}/update:
 *   patch:
 *     summary: Update an existing category
 *     description: Updates the details of an existing category by its ID. Bearer token is required for authorization.
 *     tags:
 *       - Category
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store associated with the category."
 *       - in: path
 *         name: categoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the category to update."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Капот Q7"
 *                 description: "The updated name of the category."
 *     responses:
 *       200:
 *         description: Successfully updated the category.
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
 *                       example: "c59cabb1-bd6d-426b-bd02-067370f18866"
 *                     storeId:
 *                       type: string
 *                       example: "34559779-0a3c-49e7-ab8e-913efc3895bc"
 *                     billboardId:
 *                       type: string
 *                       example: "5ed43e2c-9aa8-480f-9e91-aae874b43a4d"
 *                     name:
 *                       type: string
 *                       example: "Капот Q7"
 *                     type:
 *                       type: string
 *                       example: "main"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-04T10:18:51.703Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-04T18:32:02.798Z"
 *                     parentId:
 *                       type: string
 *                       nullable: true
 *                       example: null
 *                     maxPrice:
 *                       type: number
 *                       nullable: true
 *                       example: null
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
 *         description: Not Found - The specified category was not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category not found."
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
 * /api/category/{storeId}/{categoryId}/delete:
 *   delete:
 *     summary: Delete a category
 *     description: Deletes an existing category by its ID. Bearer token is required for authorization.
 *     tags:
 *       - Category
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store associated with the category."
 *       - in: path
 *         name: categoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the category to delete."
 *     responses:
 *       200:
 *         description: Successfully deleted the category.
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
 *                       example: "Category success delete"
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
 *         description: Not Found - The specified category was not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category not found."
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
