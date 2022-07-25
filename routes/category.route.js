const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { authAdminRole, authManagerRole } = require("../middleware/authenRoles");

const categoryController = require("../app/controllers/CategoryController");

/**
 * @swagger
 * '/category/create':
 *  post:
 *     tags: [POST]
 *     security:
 *       - ApiKeyAuth: []
 *     summary: Create category.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Category'
 */

router.post(
  "/create",
  auth,
  authManagerRole,
  categoryController.CreateCategory
);

router.get("/get-all-categories", categoryController.findAll);

module.exports = router;
