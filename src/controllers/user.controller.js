const User = require('../models/user.model');

exports.getProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized: User not found' });
    }

    const { _id, name, email, createdAt } = req.user;

    res.status(200).json({
      id: _id,
      name,
      email,
      createdAt,
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.searchUsers = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ message: 'Name query parameter is required' });
    }

    const users = await User.find({
      name: { $regex: name, $options: 'i' }
    }).select('-password');

    res.status(200).json({ users });
  } catch (error) {
    console.error('Error searching users:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
