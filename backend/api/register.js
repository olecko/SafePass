const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const user = new User({
    username,
    password,
    email,
  });
  await user.save();

  res.status(201).json({ message: 'User created' });
});

module.exports = router;
