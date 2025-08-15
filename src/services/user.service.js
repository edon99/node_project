import User from '../models/user.model.js';

export async function getAllUsers() {
    return await User.findAll();
}

export async function createUser(data) {
    return await User.create(data);
}
