/**
 * @swagger
 * /api/product/{storeId}/create:
 *   post:
 *     summary: Create a new product for a store
 *     description: Upload a new product with title, description, prices, categories, images, and models for a specific store.
 *     tags:
 *       - Product
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
 *         description: "The ID of the store where the product will be created."
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: "The title of the product."
 *                 example: "Test product"
 *               description:
 *                 type: string
 *                 description: "The description of the product."
 *                 example: "This is a test product description."
 *               article:
 *                 type: string
 *                 description: "The article number of the product."
 *                 example: "ART-12345"
 *               position:
 *                 type: string
 *                 description: "The position of the product in listings."
 *                 example: "10"
 *               type:
 *                 type: string
 *                 description: "The type of the product. Can be `main` or `additional`."
 *                 enum: [main, additional]
 *                 example: "main"
 *               isFeatured:
 *                 type: boolean
 *                 description: "Whether the product is featured."
 *                 example: true
 *               isArchived:
 *                 type: boolean
 *                 description: "Whether the product is archived."
 *                 example: false
 *               productPrices:
 *                 type: array
 *                 description: "An array of price objects for the product."
 *                 items:
 *                   type: object
 *                   properties:
 *                     retail_price:
 *                       type: string
 *                       description: "The retail price of the product."
 *                       example: "1000"
 *                     drop_price:
 *                       type: string
 *                       description: "The drop price of the product."
 *                       example: "800"
 *               translations:
 *                 type: array
 *                 description: "An array of translation objects for the product."
 *                 items:
 *                   type: object
 *                   properties:
 *                     languageCode:
 *                       type: string
 *                       description: "The language code for the translation."
 *                       example: "en"
 *                     title:
 *                       type: string
 *                       description: "The translated title."
 *                       example: "Test product in English"
 *                     description:
 *                       type: string
 *                       description: "Detailed product description in English."
 *               categories:
 *                 type: array
 *                 description: "An array of category IDs to associate the product with categoryId."
 *                 items:
 *                   type: object
 *                   properties:
 *                     categoryId:
 *                       type: string
 *                       description: "The ID of the category."
 *                       example: "cat-98765"
 *               images:
 *                 type: array
 *                 description: "An array of image files for the product."
 *                 items:
 *                   type: string
 *                   format: binary
 *               models:
 *                 type: array
 *                 description: "An array of model objects associated with the product."
 *                 items:
 *                   type: object
 *                   properties:
 *                     models:
 *                       type: array
 *                       description: "An array of model IDs."
 *                       items:
 *                         type: string
 *                       example: ["5acf78e5-4c06-41e3-acc4-75a973352ddf", "dffa62c1-9d48-4882-a4e1-22fe63a1128c"]
 *     responses:
 *       200:
 *         description: Successfully created the product.
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
 *                       description: "The ID of the created product."
 *                       example: "prod-12345"
 *                     storeId:
 *                       type: string
 *                       description: "The ID of the store."
 *                       example: "store-67890"
 *                     title:
 *                       type: string
 *                       description: "The title of the product."
 *                       example: "Test product"
 *                     description:
 *                       type: string
 *                       description: "The description of the product."
 *                       example: "This is a test product description."
 *                     article:
 *                       type: string
 *                       description: "The article number of the product."
 *                       example: "ART-12345"
 *                     type:
 *                       type: string
 *                       description: "The type of the product."
 *                       example: "main"
 *                     isArchived:
 *                       type: boolean
 *                       description: "Whether the product is archived."
 *                       example: false
 *                     isFeatured:
 *                       type: boolean
 *                       description: "Whether the product is featured."
 *                       example: true
 *                     position:
 *                       type: string
 *                       description: "The position of the product in listings."
 *                       example: "10"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The creation timestamp."
 *                       example: "2024-12-04T18:46:53.406Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The last updated timestamp."
 *                       example: "2024-12-04T18:46:53.406Z"
 *                 message:
 *                   type: string
 *                   example: "Product successfully created."
 *                 slug:
 *                   type: string
 *                   example: "test-product"
 *       400:
 *         description: Bad Request - Invalid input data.
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/product/{storeId}/{productId}/update:
 *   patch:
 *     summary: Update a product for a specific store
 *     description: Update the product details such as title, description, and other properties for a given product in a specific store.
 *     tags:
 *       - Product
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
 *         description: "The ID of the store where the product will be updated."
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the product to be updated."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: "The updated title of the product."
 *                 example: "Test product 2 new"
 *               description:
 *                 type: string
 *                 description: "The updated description of the product."
 *               code1c:
 *                 type: string
 *                 description: "Updated code1c."
 *               quantity:
 *                 type: string
 *                 description: "Updated product quantity."
 *               price:
 *                 type: string
 *                 description: "Updated price."
 *               type:
 *                 type: string
 *                 description: "The updated type of the product."
 *                 example: "main"
 *               isFeatured:
 *                 type: boolean
 *                 description: "Updated status whether the product is featured."
 *               isArchived:
 *                 type: boolean
 *                 description: "Updated status whether the product is archived."
 *               position:
 *                 type: string
 *                 description: "Updated position of the product in listings."
 *               models:
 *                 type: array
 *                 description: "An array of models associated with the product."
 *                 items:
 *                   type: object
 *                   properties:
 *                     models:
 *                       type: array
 *                       description: "An array of model IDs."
 *                       items:
 *                         type: string
 *                         example: "5acf78e5-4c06-41e3-acc4-75a973352ddf"
 *     responses:
 *       200:
 *         description: Successfully updated the product.
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
 *                       description: "The ID of the updated product."
 *                       example: "901d913e-aa05-48ec-9686-fb8bcbe0daf7"
 *                     storeId:
 *                       type: string
 *                       description: "The ID of the store."
 *                       example: "34559779-0a3c-49e7-ab8e-913efc3895bc"
 *                     title:
 *                       type: string
 *                       description: "The title of the product."
 *                       example: "Test product 2 new"
 *                     description:
 *                       type: string
 *                       description: "The description of the product."
 *                       example: "Test product 2"
 *                     article:
 *                       type: string
 *                       description: "The article number of the product."
 *                       example: "3434334"
 *                     type:
 *                       type: string
 *                       description: "The type of the product."
 *                       example: "main"
 *                     isArchived:
 *                       type: boolean
 *                       description: "Whether the product is archived."
 *                       example: false
 *                     isFeatured:
 *                       type: boolean
 *                       description: "Whether the product is featured."
 *                       example: true
 *                     position:
 *                       type: string
 *                       description: "The position of the product in listings."
 *                       example: "1"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The creation timestamp."
 *                       example: "2024-12-04T18:46:53.406Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: "The last updated timestamp."
 *                       example: "2024-12-04T18:58:54.070Z"
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
 * /api/product/{storeId}/{productId}:
 *   get:
 *     summary: Get a product by ID for a specific store
 *     description: Retrieve the details of a specific product in a particular store, including information such as title, description, price, images, and translations.
 *     tags:
 *       - Product
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the store where the product is located."
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the product to retrieve."
 *     responses:
 *       200:
 *         description: Successfully retrieved product data.
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
 *                       description: "The ID of the product."
 *                       example: "901d913e-aa05-48ec-9686-fb8bcbe0daf7"
 *                     storeId:
 *                       type: string
 *                       description: "The ID of the store."
 *                       example: "34559779-0a3c-49e7-ab8e-913efc3895bc"
 *                     title:
 *                       type: string
 *                       description: "The title of the product."
 *                       example: "test product 2 new"
 *                     description:
 *                       type: string
 *                       description: "The description of the product."
 *                       example: "Test product 2"
 *                     quantity:
 *                       type: string
 *                       description: "The quantity available for the product."
 *                       example: "0"
 *                     price:
 *                       type: string
 *                       description: "The price of the product."
 *                       example: ""
 *                     type:
 *                       type: string
 *                       description: "The type of the product."
 *                       example: "main"
 *                     isArchived:
 *                       type: boolean
 *                       description: "Whether the product is archived."
 *                       example: false
 *                     isFeatured:
 *                       type: boolean
 *                       description: "Whether the product is featured."
 *                       example: true
 *                     productPrices:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: "The ID of the product price."
 *                             example: "c983c413-1c5e-4d9a-8953-6d2edd0760b5"
 *                           retail_price:
 *                             type: string
 *                             description: "The retail price of the product."
 *                             example: "500"
 *                           drop_price:
 *                             type: string
 *                             description: "The discounted price of the product."
 *                             example: "300"
 *                           productId:
 *                             type: string
 *                             description: "The ID of the product this price belongs to."
 *                             example: "901d913e-aa05-48ec-9686-fb8bcbe0daf7"
 *                     translations:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: "The ID of the translation."
 *                             example: "f271a07f-c816-45f8-9a33-69c1ce34e590"
 *                           languageCode:
 *                             type: string
 *                             description: "The language code of the translation."
 *                             example: "en"
 *                           title:
 *                             type: string
 *                             description: "The translated title of the product."
 *                             example: "Test product 2 eng"
 *                           description:
 *                             type: string
 *                             description: "The translated description of the product."
 *                             example: "Test product 2 desc eng"
 *                     images:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: "The ID of the image."
 *                             example: "f0d6c9a2-b58b-4f40-8f02-3ef675793359"
 *                           url:
 *                             type: string
 *                             description: "The URL of the image."
 *                             example: "6a43034f-c42f-41d1-9522-09c1e3fc6b28_2024-11-25 13.17.01.jpg"
 *                     categories:
 *                       type: array
 *                       description: "Categories to which the product belongs."
 *                       items: {}
 *                     reviews:
 *                       type: array
 *                       description: "Reviews for the product."
 *                       items: {}
 *                     productOptions:
 *                       type: array
 *                       description: "Product options available."
 *                       items: {}
 *                     productCharacteristics:
 *                       type: array
 *                       description: "Product characteristics."
 *                       items: {}
 *                     productFilters:
 *                       type: array
 *                       description: "Filters related to the product."
 *                       items: {}
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid parameters.
 *       404:
 *         description: Product not found for the given store and product IDs.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/product/{storeId}/{productId}/add-characteristic:
 *   patch:
 *     summary: Add a characteristic to a product
 *     description: Add a new characteristic to the specified product in a particular store. The characteristic includes an ID, name, and descriptions in different languages.
 *     tags:
 *       - Product
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
 *         description: "The ID of the store where the product is located."
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the product to which the characteristic will be added."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               characteristic:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     characteristicId:
 *                       type: string
 *                       description: "The ID of the characteristic."
 *                       example: "63d1859f-5359-41ed-9b39-f283885fb555"
 *                     name:
 *                       type: string
 *                       description: "The name of the characteristic."
 *                       example: "Новий"
 *                     descriptions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           languageId:
 *                             type: string
 *                             description: "The language ID for the description."
 *                             example: "en"
 *                           text:
 *                             type: string
 *                             description: "The text description of the characteristic in the given language."
 *                             example: "New"
 *     responses:
 *       200:
 *         description: Successfully added the characteristic.
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
 *                       description: "Success message."
 *                       example: "Characteristics success added"
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
 *         description: Product or store not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/product/{storeId}/{productId}/add-option:
 *   patch:
 *     summary: Add options to a product
 *     description: Adds new options with values and prices to a specific product in a given store.
 *     tags:
 *       - Product
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
 *         description: "The ID of the store where the product is located."
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the product to which options will be added."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               options:
 *                 type: array
 *                 description: "List of options to add to the product."
 *                 items:
 *                   type: object
 *                   properties:
 *                     optionId:
 *                       type: string
 *                       description: "The ID of the option."
 *                       example: "33324288-6983-45d5-8cda-cb1eb4aacf42"
 *                     productOptionValues:
 *                       type: array
 *                       description: "The values associated with the option and their prices."
 *                       items:
 *                         type: object
 *                         properties:
 *                           optionValueId:
 *                             type: string
 *                             description: "The ID of the option value."
 *                             example: "b72b529d-38e2-4430-8ae6-be55ea8681fb"
 *                           price:
 *                             type: string
 *                             description: "The price for this option value."
 *                             example: "600"
 *     responses:
 *       200:
 *         description: Successfully added options to the product.
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
 *                       example: "Options success added"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid data or missing parameters.
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Product not found for the given store and product IDs.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/product/{storeId}/{productId}/add-filter:
 *   patch:
 *     summary: Add filters to a product
 *     description: Adds new filters to a specific product in a given store.
 *     tags:
 *       - Product
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
 *         description: "The ID of the store where the product is located."
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the product to which filters will be added."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               filters:
 *                 type: array
 *                 description: "List of filters to add to the product."
 *                 items:
 *                   type: object
 *                   properties:
 *                     filterId:
 *                       type: string
 *                       description: "The ID of the filter."
 *                       example: "e8846770-b2bf-4e49-b012-597afb377b45"
 *     responses:
 *       200:
 *         description: Successfully added filters to the product.
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
 *                       example: "Filters success added"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Bad Request - Invalid data or missing parameters.
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Product not found for the given store and product IDs.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/product/{storeId}/{productId}/delete:
 *   delete:
 *     summary: Delete a product
 *     description: Deletes a specific product from a given store.
 *     tags:
 *       - Product
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
 *         description: "The ID of the store where the product is located."
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The ID of the product to be deleted."
 *     responses:
 *       200:
 *         description: Successfully deleted the product.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product success delete"
 *       400:
 *         description: Bad Request - Invalid data or missing parameters.
 *       401:
 *         description: Unauthorized - Missing or invalid Bearer token.
 *       404:
 *         description: Product not found for the given store and product IDs.
 *       500:
 *         description: Internal Server Error.
 */
