import bcrypt from 'bcryptjs';
import User from "../models/User.js";
import { Router } from 'express';

const router = Router();

console.log("✅ userRoutes loaded");

router.post('/add-user', async (req, res) => {
  const { email, username, role, password } = req.body;

  try {
    const newUser = new User({
      email,
      username,
      role,
      password,  // Ideally, hash the password before saving it!
    });

    // Save the user to the database
    await newUser.save();

    return res.status(200).json({
      success: true,
      message: 'User registered successfully!',
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: 'Failed to register user! Please try again later.',
    });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login-user', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // 2. Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // 3. If everything is fine
    return res.status(200).json({ message: 'Login successful!' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

export default router;