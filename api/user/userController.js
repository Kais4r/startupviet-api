const userService = require("./userServices");

exports.getAllUser = async (req, res) => {
  try {
    const userList = await userService.getAllUser();
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addUser = async (req, res) => {
  try {
    const user = await userService.addUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await userService.updateUserById(userId, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    if (error.message === "News not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const result = await userService.deleteUserById(req.params.id);
    res.status(200).json({ message: "News post deleted successfully", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
