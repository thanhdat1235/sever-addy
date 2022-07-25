const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { authAdminRole, authManagerRole } = require("../middleware/authenRoles");

const adminController = require("../app/controllers/AdminController");

router.post("/refresh-token", adminController.refreshToken);

router.post("/search", adminController.search);

router.delete("/delete-many", adminController.deleteMany);

router.post("/reset-password/:email", adminController.resetPassword);

router.put("/forgotpassword", adminController.forgotpassword);

router.post("/verify-otp/:email", adminController.verify);

router.delete("/delete/:id", auth, authAdminRole, adminController.deleteOne);

/**
 * @swagger
 * '/admin/update/{id}':
 *  put:
 *     tags: [USER]
 *     security:
 *       - ApiKeyAuth: []
 *     summary: Update user by id.
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the user
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                first_name:
 *                  type: string
 *                last_name:
 *                  type: string
 *                password:
 *                  type: string
 *                role:
 *                  type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/User'
 */
router.put("/update/:id", auth, adminController.updateUser);

router.get("/user/:id", auth, adminController.findOne);

/**
 * @swagger
 * '/admin/logout':
 *  post:
 *     tags: [AUTH]
 *     summary: Logout.
 *     responses:
 *       200:
 *         description: Success
 */

router.post("/logout", auth, adminController.logout);

/**
 * @swagger
 * '/admin/login':
 *  post:
 *     tags: [AUTH]
 *     security:
 *       - ApiKeyAuth: []
 *     summary: Login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/User'
 */
router.post("/login", adminController.login);

router.post("/register", adminController.register);

router.get("/", auth, adminController.getAll);

module.exports = router;
