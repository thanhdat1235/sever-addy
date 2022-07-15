const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { authAdminRole, authManagerRole } = require("../middleware/authenRoles");

const parentPostController = require("../app/controllers/parentPostController");

router.post("/create", auth, authManagerRole, parentPostController.CreatePost);

// router.get(
//   "/get-all-categories",
//   auth,
//   authManagerRole,
//   categoryController.findAll
// );

module.exports = router;
