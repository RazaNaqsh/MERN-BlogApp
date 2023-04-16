const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

const get_blogs = async (req, res) => {
	const blogs = await Blog.find({}).sort({ createdAt: -1 });
	res.status(200).json(blogs);
};

module.exports = {
	get_blogs,
};
