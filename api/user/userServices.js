const User = require("../../models/user.model");

exports.getAllUser = async () => {
  try {
    const userList = await User.find({});
    return userList;
  } catch (error) {
    throw error;
  }
};

exports.getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.addUser = async (userData) => {
  try {
    const news = await User.create(userData);
    return news;
  } catch (error) {
    throw error;
  }
};

exports.updateUserById = async function (userId, updateData) {
  const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  });
  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};

exports.deleteUserById = async (id) => {
  try {
    const result = await User.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw error;
  }
};
