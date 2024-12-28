import { Router } from "express";
import User from "../Models/User.js";
import { generateToken } from "../helper/generateToken.js";
import jsonWeb from 'jsonwebtoken';

const router = Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username }) || await User.findOne({ email: username });
    if (!user || user.password !== password) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    const token = await generateToken(user._id);
    res.json({ success: true, token, user, message: "Logged In Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = await generateToken(user._id);
    res.json({ success: true, message: "User Created", user, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

export default router;
