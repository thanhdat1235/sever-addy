const express = require("express");
const fileUpload = require("express-fileupload");
const url = require("url");

class UploadController {
  uploadImages(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const file = req.files.file;
    const uploadPath = "files-upload/" + file.name;

    file.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);

      res.send({
        message: "Upload successfully",
        filePath: `${req.protocol}://${req.get("host")}/${file.name}`,
      });
    });
  }
}

module.exports = new UploadController();
