import User from "../models/User.js";

//show all users
export const getUsers = async (req, res, next) => {
    const users = await User.query();
    res.json(users);
};

// you can add other functions like createUser, updateUser, deleteUser later.