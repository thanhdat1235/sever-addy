const mongoose = require("mongoose");
const Category = require("../../model/category");
const Post = require("../../model/posts");
const ParentPosts = require("../../model/parentPosts");

class ParentPostController {
  async CreatePost(req, res) {
    try {
      const { name, categoryID } = req.body;
      if (!name || !categoryID)
        return res.status(404).send({ message: "Name is not exist." });
      const newParentPost = await ParentPosts.create({
        name: name,
        categories: categoryID,
      });
      if (!newParentPost)
        return res.status(500).send({ message: "Error created" });
      const categoryByID = await Category.findByIdAndUpdate(
        { _id: categoryID },
        {
          parentPosts: newParentPost._id,
        }
      );
      res.status(201).json({ categoryByID, newParentPost });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error creating post." });
    }
  }
}

module.exports = new ParentPostController();
