import Image from "../models/Image.js";

//show all users
export const getImages = async (req, res, next) => {
    const tasks = await Image.query();
    res.json(tasks);
};

// you can add other functions like createUser, updateUser, deleteUser later.