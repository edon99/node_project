import * as userService from '../services/user.service.js';

export async function index(req, res) {
    const users = await userService.getAllUsers();
    res.json(users);
}

export async function store(req, res) {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
}
