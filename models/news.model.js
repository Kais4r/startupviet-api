const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter post name"],
  },
  note: {
    type: String,
    required: [true, "Please enter note"],
  },
  username: {
    type: String,
    required: [true, "Please enter username"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: [true, "Please upload an image"],
  },
  content: {
    type: String,
    required: [true, "Please enter the content of the news"],
  },
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
