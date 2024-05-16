const userModels = require('../model/model');

class UserController {
    static getAllUsers = async (req, res) => {
        try {
            const allUsers = await userModels.find({});
            if (allUsers) {
                console.log("all users successful");
                return res.status(200).json(allUsers);
            }
        } catch (error) {
            console.log("all users error");
            return res.status(404).json(error);
        }
    }

    static createUser = async (req, res) => {
        try {
            const { name, email, age } = req.body;
            if (name && email && age) {
                const newUser = new userModels({
                    name,
                    email,
                    age
                });

                const savedUser = await newUser.save();
                if (savedUser) {
                    console.log("user created successfully");
                    return res.status(201).json(savedUser);
                } else {
                    console.log("something went wrong");
                    return res.status(400).json({ message: "something wrong" });
                }
            } else {
                console.log("all fields required");
                return res.status(400).json({ message: "All fields required" });
            }
        } catch (error) {
            console.log("create user error");
            return res.status(500).json(error);
        }
    }

    static getSingelUser = async (req, res) => {
        try {
            const {id} = req.params;
            if (id) {
                const getSingelData = await userModels.findById(id);
                return res.status(200).json(getSingelData);
            }
            else {
                return res.status(400).json({ message: "id not found" });
            }
        }
        catch (error) {
            return res.status(400).json(error);
        }
    }

    static updateUser = async (req, res) => {
        try {
            const {id} = req.params;
            if (id) {
                const getUpdateData = await userModels.findByIdAndUpdate(id, req.body);
                return res.status(200).json(getUpdateData);
            }
            else {
                return res.status(400).json({ message: "id not found" });
            }
        }
        catch (error) {
            return res.status(400).json(error);
        }
    }

    static deleteUser = async (req, res) => {
        try {
            const {id} = req.params;
            if (id) {
                const getDeletedata = await userModels.findByIdAndDelete(id);
                return res.status(200).json(getDeletedata);
            }
            else {
                return res.status(400).json({ message: "id not found" });
            }
        }
        catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = UserController;
