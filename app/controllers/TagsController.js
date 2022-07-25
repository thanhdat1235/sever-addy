const mongoose = require("mongoose");
const Tags = require("../../model/tags");
const Post = require("../../model/posts");
const Category = require("../../model/category");

class TagsController {
  async CreateTags(req, res) {
    const { name, categoryId } = req.body;
    try {
      if ((!name, !categoryId))
        return res.status(404).send({ message: "All input is required" });
      const tag = await Tags.create({
        name: name,
        created_at: new Date(),
      });
      console.log(tag);
      const saveCategory = await Category.findByIdAndUpdate(
        { _id: categoryId },
        { tags: tag._id },
        { new: true }
      );
      res.status(201).json({ tag, saveCategory });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error server" });
    }
  }

  async findAll(req, res, next) {
    try {
      const allTags = await Tags.find();
      res.status(201).json(allTags);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TagsController();
