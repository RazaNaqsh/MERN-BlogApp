require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/blogs", blogRoutes);

// default route
app.use("/", (req, res) => {
	res.json({ msg: "this is home" });
});

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log("connected to db & listening on port", process.env.PORT);
		});
	})
	.catch((err) => console.error(err));
