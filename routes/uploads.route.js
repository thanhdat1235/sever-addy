const express = require("express");
const router = express.Router();

const uploadController = require("../app/controllers/UploadController");

router.post("/images", uploadController.uploadImages);

module.exports = router;
