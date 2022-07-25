const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { authAdminRole, authManagerRole } = require("../middleware/authenRoles");

const tagsController = require("../app/controllers/TagsController");

/**
 * @swagger
 * '/tags/create':
 *  post:
 *     tags: [POST]
 *     security:
 *       - ApiKeyAuth: []
 *     summary: Create tags.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                categoryId:
 *                  type: string
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Tags'
 */

router.post("/create", auth, authManagerRole, tagsController.CreateTags);

router.get("/", tagsController.findAll);

module.exports = router;
