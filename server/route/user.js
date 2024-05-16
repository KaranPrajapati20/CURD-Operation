const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);
router.get("/users/single/:id", userController.getSingelUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
