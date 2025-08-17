import * as authService from '../services/auth.service.js';

export async function register(req, res) {
  try{
  const result = await authService.register(req.body);
  return res.status(201).json(result);

  }catch(error){
      return res.status(error.status || 500).json({
      type: "error",
      message: error.message || "error registring"
    });
  }
    
}

export async function login(req, res) {

  try{
    const result = await authService.login(req.body);
    res.cookie('token', result.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development',
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000
    });
     return res.status(200).json(result);
  }catch(error){
     return res.status(error.status || 500).json({
      type: "error",
      message: error.message || "error logging in"
    });
  }
}

export async function logout(req, res) {
  try{
      res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'development',
    sameSite: 'strict'
  });
  return res.status(201).json({ 
    type: 'success',
     message: 'Logged out successfully'
     });
  }catch(error){
    return res.status(error.status || 500).json({
      type: "error",
      message: error.message || "error logging out"
    });
  }

}
