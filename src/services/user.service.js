const User = require('../models/user.model');

class UserService {
  static async searchUsersByName(name) {
    if (!name) return [];

    
    const users = await User.find({
      name: { $regex: name, $options: 'i' },
    }).select('-password'); 

    return users;
  }
}

module.exports = UserService;
