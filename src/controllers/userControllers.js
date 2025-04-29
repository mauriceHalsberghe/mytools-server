import User from "../models/User.js";

//show all users
export const getUsers = async (req, res, next) => {
    const tasks = await User.query();
    res.json(tasks);
};

// you can add other functions like createUser, updateUser, deleteUser later.