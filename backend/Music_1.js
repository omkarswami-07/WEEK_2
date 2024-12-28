import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
});

const Music = mongoose.model("Music", musicSchema);

export default Music;
