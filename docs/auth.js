/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User authorization
 *     description: User login, returns access token and role.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1N..."
 *                     role:
 *                       type: string
 *                       example: "user"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: Password or email is not correct
 *         headers:
 *           X-Error-Message:
 *             description: Error message
 *             schema:
 *               type: string
 *               example: "Password or email is not correct"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Password or email is not correct"
 *       500:
 *         description: Internal Error
 *         headers:
 *           X-Error-Message:
 *             description: Server Error
 *             schema:
 *               type: string
 *               example: "Server Error"
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
 * /api/auth/register:
 *   post:
 *     summary: New user registration
 *     description: Creating a new user and returning the token
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Rostyslav"
 *               lastName:
 *                 type: string
 *                 example: "Haluzinskyiy"
 *               phoneNumber:
 *                 type: string
 *                 example: "09640092929"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "rossgaluz@gmail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "rostik123456"
 *     responses:
 *       200:
 *         description: Register success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     newUser:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "126f7db5-2e29-4924-ab3e-0edb8456453f"
 *                         firstName:
 *                           type: string
 *                           example: "Rostyslav"
 *                         lastName:
 *                           type: string
 *                           example: "Haluzinskyiy"
 *                         email:
 *                           type: string
 *                           example: "rossgaluz@gmail.com"
 *                         phoneNumber:
 *                           type: string
 *                           example: "09640092929"
 *                         avatar:
 *                           type: string
 *                           example: "//www.gravatar.com/avatar/75d23af433e0cea4c0e45a56dba18b30"
 *                         role:
 *                           type: string
 *                           example: "user"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjZmN2RiNS0yZTI5LTQ5MjQtYWIzZS0wZWRiODQ1NjQ1M2YiLCJpYXQiOjE3MzA5MjAwNjksImV4cCI6MTczMTAwNjQ2OX0.pJ1USskeBmBElbQdl2wu5DEToA7nnvzYK83jbcVB78E"
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 slug:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: User already exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User already exists"
 *       500:
 *         description: Internal
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server Error"
 */
