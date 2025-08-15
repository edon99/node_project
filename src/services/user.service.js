import User from '../models/user.model.js';

export async function getAllUsers() {
    return await User.findAll();
}

export async function createUser(data) {
    let user;
    try {
        user = await User.create(data);
        console.log('User Created');
    } catch (error) {
        console.error('Error creating user:', error);
    }
    return user;    
}
