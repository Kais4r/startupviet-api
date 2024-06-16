const News = require("../../models/news.model");

exports.getAllNews = async () => {
  try {
    const newsList = await News.find({});
    return newsList;
  } catch (error) {
    throw error;
  }
};

exports.getPaginatedNews = async (page = 1, limit = 10) => {
  try {
    const newsList = await News.find({})
      .skip((page - 1) * limit)
      .limit(limit);
    return newsList;
  } catch (error) {
    throw error;
  }
};

exports.getNewsById = async (id) => {
  try {
    const news = await News.findById(id);
    return news;
  } catch (error) {
    throw error;
  }
};

exports.getAllNewsByUserId = async (userid) => {
  try {
    const news = await News.find({ userid: userid });
    return news;
  } catch (error) {
    throw error;
  }
};

exports.addNews = async (newsData) => {
  try {
    const news = await News.create(newsData);
    return news;
  } catch (error) {
    throw error;
  }
};

exports.updateNewsById = async function (newsId, updateData) {
  const updatedNews = await News.findByIdAndUpdate(newsId, updateData, {
    new: true,
  });
  if (!updatedNews) {
    throw new Error("News not found");
  }
  return updatedNews;
};

exports.deleteNewsById = async (id) => {
  try {
    const result = await News.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw error;
  }
};
