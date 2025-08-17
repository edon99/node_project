import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export default {
  generateToken(payload, expiresIn = JWT_EXPIRES_IN) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
  },

  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return { type: 'success', data: decoded };
    } catch (err) {
      return { type: 'error', message: 'Invalid or expired token' };
    }
  }
};
