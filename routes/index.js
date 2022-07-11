const postRouter = require("./post.route");
const adminRouter = require("./admin.route");
const contactRouter = require("./contact.route");
const uploadRouter = require("./uploads.route");

function route(app) {
  app.use("/post", postRouter);
  app.use("/admin", adminRouter);
  app.use("/contact", contactRouter);
  app.use("/file-upload", uploadRouter);
}

module.exports = route;
