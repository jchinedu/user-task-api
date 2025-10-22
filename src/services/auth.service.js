const User = require('../models/user.model');
const { generateToken } = require('../utils/jwt.util');

class AuthService {
  static async register(data) {
    const { name, email, password } = data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('Email already in use');
    }

    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);

    return { user, token };
  }

  static async login(data) {
    const { email, password } = data;

    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await user.matchPassword(password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = generateToken(user._id);
    return { user, token };
  }
}

module.exports = AuthService;
