const Post = require("../../model/posts");
const Category = require("../../model/category");
const Tags = require("../../model/tags");
const SubscribeNewPost = require("../../model/subcribenewpost");
const statusAPI = require("../../utils/statusAPI");
const decodedBase64 = require("../../utils/write");
const { sendEmail } = require("../../utils/sendMail");

class PostController {
  async createPost(req, res, next) {
    try {
      const {
        title,
        ckeditor_data,
        urlImage,
        description,
        categoryId,
        tagsId,
        templateId,
        status,
      } = req.body;
      if (
        ((!title,
        !ckeditor_data,
        !urlImage,
        !description,
        !categoryId,
        !templateId,
        !status),
        !tagsId)
      ) {
        return res.status(404).send({ message: "All input is require" });
      }
      const newPost = await Post.create({
        title,
        ckeditor_data,
        urlImage,
        description,
        created_at: new Date(),
        categories: categoryId,
        tags: tagsId,
        templateId,
        status,
        countViews: 0,
        countComments: 0,
      });
      const saveCategory = await Category.findByIdAndUpdate(
        { _id: categoryId },
        { posts: newPost._id },
        { new: true }
      );
      const saveTags = await Tags.findByIdAndUpdate(
        { _id: tagsId },
        { posts: newPost._id },
        { new: true }
      );
      res.status(201).json({ newPost, saveCategory, saveTags });
    } catch (error) {
      console.log(error);
    }
  }

  async findByCategory(req, res, next) {
    try {
      const idCategory = req.params.id;
      if (!idCategory)
        return res.status(404).send({ message: "No category id provided." });
      const dataFinded = await Post.find({ categories: idCategory }).populate(
        "categories"
      );
      res.status(200).json(dataFinded);
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const pageSize = parseInt(req.query.pageSize);
      const page = parseInt(req.query.page);
      const skip = (page - 1) * pageSize;
      Post.countDocuments({}, async function (err, count) {
        if (err) return next(err);
        const totalElements = count;
        const totalPages = Math.ceil(totalElements / pageSize);
        await Post.find()
          .skip(skip)
          .limit(pageSize)
          .then((data) => {
            const numberOfElements = data.length;
            res.status(201).json({
              data,
              totalElements,
              totalPages,
              numberOfElements,
              pageAble: {
                page,
                pageSize,
              },
            });
          });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController();
