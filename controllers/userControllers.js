import path from 'path';
import { fileURLToPath } from 'url';
import fsp from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const userPath = path.join(__dirname, '..', 'data', 'users.json');

async function getDataFromFile() {
    const originalData = await fsp.readFile(userPath, 'utf-8');
    return JSON.parse(originalData);
}

async function getUsers(request, response) {
    try {
        const users = await getDataFromFile();
        response.json(users);
    } catch (error) {
        response.status(500).json(error);
    }
}

// you can add other functions like createUser, updateUser, deleteUser later.

export default {
    getUsers,
    // createUser,
    // updateUser,
    // deleteUser,
};
