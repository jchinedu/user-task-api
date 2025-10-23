const User = require('../models/user.model');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwt.util');

class AuthService {
  static async register(data) {
    const { name, email, password } = data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('Email already in use');
    }

    const user = await User.create({ name, email, password });
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    return { user, accessToken, refreshToken };
  }

  static async login(data) {
    const { email, password } = data;

    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await user.matchPassword(password);
    if (!isMatch) throw new Error('Invalid credentials');

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    return { user, accessToken, refreshToken };
  }
}

module.exports = AuthService;
