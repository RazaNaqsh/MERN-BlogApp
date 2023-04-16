const express = require("express");

const { get_blogs } = require("../controllers/blogController");

const router = express.Router();

router.get("/", get_blogs);

module.exports = router;
