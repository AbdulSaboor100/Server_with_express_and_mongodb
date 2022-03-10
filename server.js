import express from "express";
import connentDatabase from "./config/db.js";
import auth from "./routes/api/auth.js";
import users from "./routes/api/users.js";
import profile from "./routes/api/profile.js";
import post from "./routes/api/posts.js";

const app = express();

// Connect database
connentDatabase();

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", post);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started ${PORT}`));
