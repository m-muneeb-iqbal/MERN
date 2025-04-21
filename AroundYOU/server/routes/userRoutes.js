import { Router } from 'express';
const router = Router();
import User from "../models/User.js";

console.log("✅ userRoutes loaded");

router.post("/add-user", async (req, res) => {
  console.log("📥 POST /add-user hit", req.body);
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
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