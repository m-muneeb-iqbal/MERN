import { Router } from 'express';
const router = Router();
import User from "../models/User.js";

console.log("✅ userRoutes loaded");

router.post('/add-user', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const newUser = new User({
      email,
      username,
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
      error: 'Failed to register user, please try again later.',
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

export default router;