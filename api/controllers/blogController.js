const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

// get all blogs
const get_blogs = async (req, res) => {
	const blogs = await Blog.find({}).sort({ createdAt: -1 });
	res.status(200).json(blogs);
};

// create blog
const create_blogs = async (req, res) => {
	const { title, snippet, content } = req.body;
	const blog = await Blog.create({
		title,
		snippet,
		content,
	});
	res.status(200).json(blog);
};

// get a single blog
const get_blog = async (req, res) => {
	const { id } = req.params;
	const blog = await Blog.findById(id);
	res.status(200).json(blog);
};

// delete a blog
const delete_blog = async (req, res) => {
	const { id } = req.params;
	const blog = await Blog.findOneAndDelete({ _id: id });
	res.status(200).json(blog);
};

// update blog
const update_blog = async (req, res) => {
	const { id } = req.params;
	const blog = await Blog.findOneAndUpdate({ _id: id }, req.body, {
		new: true,
	});
	res.status(200).json(blog);
};

module.exports = {
	get_blogs,
	create_blogs,
	get_blog,
	delete_blog,
	update_blog,
};
