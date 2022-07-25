const mongoose = require("mongoose");
const Category = require("../../model/category");
const Post = require("../../model/posts");

class CategoryController {
  async CreateCategory(req, res) {
    const { name } = req.body;
    try {
      if (!name) return res.status(404).send({ message: "Name is required" });
      const category = await Category.create({
        name: name,
        created_at: new Date(),
      });
      console.log(category);
      res.status(201).json(category);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error server" });
    }
  }

  async findAll(req, res, next) {
    try {
      const allCategories = await Category.find();
      res.status(201).json(allCategories);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CategoryController();
