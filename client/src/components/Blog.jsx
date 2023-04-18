import { useEffect, useState } from "react";

const Blog = () => {
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await fetch("http://localhost:4000/api/blogs", {
					method: "GET",
				});

				const data = await response.json();

				setBlogs(data);
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
							<div>
								<p>{blog.title}</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
