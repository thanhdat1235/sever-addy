const mongoose = require("mongoose");
const Category = require("../../model/category");
const Post = require("../../model/posts");

class CategoryController {
  async CreateCategory(req, res) {
    const { name } = req.body;
    try {
      if (!name)
        return res.status(404).send({ message: "This name is not found !" });
      const category = await Category.create({
        name: name,
      });
      console.log(category);
      res.status(201).json(category);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error server" });
    }
  }
}

module.exports = new CategoryController();
