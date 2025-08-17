import bcrypt from 'bcrypt';
import jwt from '../utils/jwt.js';
import db from '../models/index.js';

import { UniqueConstraintError } from 'sequelize';



const User = db.User;


  export async function register(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    try {
      const user = await User.create({ ...data, password: hashedPassword });
      return { 
        type: 'success',
        data: user
        };
    } catch (error) {
       if (error instanceof UniqueConstraintError) {
      const err = new Error("Email already exists");
      err.status = 409;
      throw err;
    }
       throw error
    }
  }


  export async function login({ email, password }) {
    try{
      const user = await User.findOne({ where: { email } });
      if (!user){
        const err = new Error("Invalid Credentials");
        err.status = 401;
        throw err;
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match){
        const err = new Error("Invalid Credentials");
        err.status = 401;
        throw err;
      }
      const token = jwt.generateToken({ id: user.id, role: user.role });
      
    return {
       type: 'success',
       data: { token, user }
       };

    }catch(error){
        throw error
    }
  }

  

