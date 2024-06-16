const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.post("/api/user/authenticate", userController.getUserByNameAndPassword);
router.get("/api/user/all", userController.getAllUser);
router.get("/api/user/:id", userController.getUserById);
router.post("/api/user/add", userController.addUser);
router.put("/api/user/update/:id", userController.updateUserById);
router.delete("/api/user/delete/:id", userController.deleteUserById);

router.get("/api/user/balance/:id", userController.getUserBalanceById);
router.put("/api/user/balance/addfund/:id", userController.getUserById);

module.exports = router;
