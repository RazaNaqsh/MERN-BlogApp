const express = require("express");

const {
	get_blogs,
	create_blogs,
	get_blog,
	delete_blog,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/", get_blogs);
router.post("/", create_blogs);
router.get("/:id", get_blog);
router.delete("/:id", delete_blog);

module.exports = router;
