const express = require( "express");
const { registerUser, login , logout, me} = require( "../controller/authController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authMiddleware, me)
module.exports =  router;
