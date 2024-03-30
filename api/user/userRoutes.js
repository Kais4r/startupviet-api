const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.get("/api/user/all", userController.getAllUser);
router.get("/api/user/:id", userController.getUserById);
router.post("/api/user/add", userController.addUser);
router.put("/api/user/update/:id", userController.updateUserById);
router.delete("/api/user/delete/:id", userController.deleteUserById);

module.exports = router;
