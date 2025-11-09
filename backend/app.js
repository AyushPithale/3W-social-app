const express = require( "express");
const dotenv = require( "dotenv");
const cors = require( "cors");
const { connectDB } = require( "./db/db.js");
const authRoutes = require( "./routes/authRoutes.js");
const postRoutes = require( "./routes/postRoutes.js");

dotenv.config();
connectDB();

const app = express();
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);


// app.post("/test", (req, res) => {
//   console.log("Body received:", req.body);
//   res.json(req.body);
// });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
