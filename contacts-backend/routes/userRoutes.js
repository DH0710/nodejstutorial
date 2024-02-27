const express = require("express");
const { registerUser } = require("../controllers/userController");
const {loginUser } = require("../controllers/userController");
const {currentUser} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);


module.exports = router;