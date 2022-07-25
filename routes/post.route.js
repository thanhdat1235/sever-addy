const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { authAdminRole, authManagerRole } = require("../middleware/authenRoles");

const postController = require("../app/controllers/PostController");

// router.post("/sendmail", postController.newCustomer);

// router.post("/search-by-category/:category", postController.searchByCategory);

// router.delete("/delete/:id", auth, authManagerRole, postController.deleteOne);

// router.post("/search", postController.search);

// router.get("/findone/:id", postController.findById);

// router.delete("/delete", auth, authManagerRole, postController.delete);

// router.put("/update/:id", auth, authManagerRole, postController.updatePost);

/**
 * @swagger
 * '/post/create':
 *  post:
 *     tags: [POST]
 *     security:
 *       - ApiKeyAuth: []
 *     summary: Create post.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                categoryId:
 *                  type: string
 *                tagsId:
 *                  type: string
 *                title:
 *                  type: string
 *                ckeditor_data:
 *                  type: string
 *                urlImage:
 *                  type: string
 *                description:
 *                  type: string
 *                template:
 *                  type: number
 *                status:
 *                  type: boolean
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Post'
 */

router.post("/create", auth, authManagerRole, postController.createPost);

router.post(
  "/find-by-category-id/:id",
  auth,
  authManagerRole,
  postController.findByCategory
);

router.get("/", postController.getAll);

module.exports = router;
