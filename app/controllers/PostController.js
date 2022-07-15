const Post = require("../../model/posts");
const Category = require("../../model/category");
const ParentPosts = require("../../model/parentPosts");
const SubscribeNewPost = require("../../model/subcribenewpost");
const statusAPI = require("../../utils/statusAPI");
const decodedBase64 = require("../../utils/write");
const { sendEmail } = require("../../utils/sendMail");
const { response } = require("express");

class PostController {
  async createPost(req, res, next) {
    try {
      const { title, tags, ckeditor, urlImage, description, parentID } =
        req.body;
      if (
        !title ||
        // !tags ||
        !ckeditor ||
        !urlImage ||
        !description ||
        !parentID
      )
        return res.status(404).send({ message: "All input is required" });
      const post = await Post.create({
        title: title,
        // tags: tags,
        ckeditor: ckeditor,
        urlImage: urlImage,
        description: description,
        parentPostS: parentID,
        created_at: new Date(),
      });
      if (!post) res.status(500).send({ message: "Error creating post" });
      const parentByID = await ParentPosts.findByIdAndUpdate(
        { _id: parentID },
        { posts: post._id }
      );
      res.status(201).json({ post, parentByID });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error server" });
    }
  }

  async findTest(req, res) {
    try {
      const idPost = req.params.id;
      Post.aggregate([{ $sort: { created_at: 1 } }]);
      const dataFinded = await Post.find().populate("parentPostS");
      res.json(dataFinded);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController();
