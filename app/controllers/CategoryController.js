const Category = require("../../model/category");
const Post = require("../../model/posts");

class CategoryController {
  constructor() {
    this.createCategory = this.createCategory.bind(this);
  }

  async createCategory(req, res) {
    const { name } = req.body;
    try {
      if (!name) return "Name is required";
      const newCategory = await Category.create({
        name,
      });

      const allCategory = await this.findAllCategory();
      res.status(201).json({ allCategory: allCategory });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error server !!!");
    }
  }

  async findAllCategory() {
    return await Category.find();
  }

  async findAll(req, res) {
    try {
      const allPostByCategory = await Category.find();
      console.log(allPostByCategory);
      res.status(200).json(allPostByCategory);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CategoryController();
