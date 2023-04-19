import { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await fetch("http://localhost:4000/api/blogs");

				const data = await response.json();

				if (response.ok) setBlogs(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchBlogs();
	}, []);
	useEffect(() => {
		console.log(blogs);
	}, [blogs]);
	return (
		<section>
			<div className="py-10">
				<h3 className="text-2xl text-center">
					Read ideas from across the World..
				</h3>
				<div className="flex flex-wrap">
					{blogs &&
						blogs.map((blog) => (
							<div
								key={blog._id}
								className="w-[300px] h-[300px] p-4"
							>
								<h3 className="">{blog.title}</h3>
								<p>{blog.snippet}</p>
								<p>
									{formatDistanceToNow(new Date(blog.createdAt), {
										addSuffix: true,
									})}
								</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
