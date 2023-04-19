import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const response = await fetch(`http://localhost:4000/api/blogs/${id}`);
				const data = await response.json();
				if (response.ok) setBlog(data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchBlog();
	}, []);

	useEffect(() => {
		console.log(blog);
	}, [blog]);

	return (
		<main>
			{blog && (
				<div>
					<h1 className="text-2xl">{blog.title}</h1>
					<p>{blog.content}</p>
				</div>
			)}
		</main>
	);
};

export default BlogDetails;
