const express = require('express');
const router = express.Router();
// const { getProfile } = require('../controllers/user.controller');
const { protect } = require('../middleware/auth.middleware');
const { getProfile, searchUsers } = require('../controllers/user.controller');


router.get('/profile', protect, getProfile);
router.get('/search', protect, searchUsers);


module.exports = router;
