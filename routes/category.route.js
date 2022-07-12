const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { authAdminRole, authManagerRole } = require("../middleware/authenRoles");

const categoryController = require("../app/controllers/CategoryController");

router.post(
  "/create",
  auth,
  authManagerRole,
  categoryController.createCategory
);

router.get(
  "/get-all-categories",
  auth,
  authManagerRole,
  categoryController.findAll
);

module.exports = router;
