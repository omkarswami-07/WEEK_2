import mongoose from 'mongoose';
const MONGO_URI = "mongodb://127.0.0.1:27017/SpotifyClone";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to database"))
    .catch((error) => console.log(error));
