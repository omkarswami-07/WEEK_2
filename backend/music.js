import { Router } from "express";
import Music from "../Models/Music.js";

const router = Router();

router.get("/search", async (req, res) => {
    const { name, artist } = req.query;
    try {
        const query = {};
        if (name) query.name = { $regex: name, $options: "i" };
        if (artist) query.artist = { $regex: artist, $options: "i" };
        const tracks = await Music.find(query);
        res.json({ success: true, tracks });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/all", async (req, res) => {
    try {
        const tracks = await Music.find();
        res.json({ success: true, tracks });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
