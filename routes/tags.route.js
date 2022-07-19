const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { authAdminRole, authManagerRole } = require("../middleware/authenRoles");

const tagsController = require("../app/controllers/TagsController");

router.post("/create", auth, authManagerRole, tagsController.CreateTags);

router.get("/", tagsController.findAll);

module.exports = router;
