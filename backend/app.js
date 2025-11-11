const express = require( "express");
const dotenv = require( "dotenv");
const cors = require( "cors");
const { connectDB } = require( "./db/db.js");
const authRoutes = require( "./routes/authRoutes.js");
const postRoutes = require( "./routes/postRoutes.js");
const cookieParser = require("cookie-parser");
dotenv.config();
connectDB();

const app = express();
app.use("/uploads", express.static("uploads"));
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "✅ Backend is working!" });
});


app.get("/test", (req, res) => {
  res.send("heloow");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


module.exports = app;
