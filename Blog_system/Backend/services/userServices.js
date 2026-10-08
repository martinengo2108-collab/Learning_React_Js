import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "../data/users.json");

function readUsers() {

    const data = fs.readFileSync(DATA_FILE, "utf-8");

    return JSON.parse(data);

}
function saveUsers(users) {
    fs.writeFileSync
        (DATA_FILE,
            JSON.stringify(users, null, 2)
        );

}

export function findUserUsername(username) {
    const users = readUsers();

    return users.find(
        user => user.username === username);
}

export function createUser(username, password) {
    const users = readUsers();

    const newUser = {
        id: users.length > 0
            ? users[users.length - 1].id + 1
            : 1,
            username,
            password,   
            role: "user"    
    }
}