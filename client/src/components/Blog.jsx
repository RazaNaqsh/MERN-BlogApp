import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Blog = () => {
	const navigate = useNavigate();

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

	const handleDelete = async (id, e) => {
		e.stopPropagation();
		console.log("this is id", id);
		const response = await fetch("http://localhost:4000/api/blogs/" + id, {
			method: "DELETE",
		});
		const json = await response.json();
		if (response.ok) {
			// navigate("/");
			// This is until , redux isnt added
			window.location.reload();
		}
	};
	return (
		<section>
			<div className="py-10">
				<h3 className="text-2xl text-center">
					Read ideas from across the World..
				</h3>
				<div className="my-10 w-[90%] mx-auto flex flex-wrap  gap-8 ">
					{blogs.length > 0 ? (
						blogs.map((blog) => (
							<div
								key={blog._id}
								className="w-[300px] h-[300px] p-6 border-2 rounded-lg border-indigo-300 space-y-2 relative z-10"
							>
								<span
									className="absolute z-50 top-3 right-3 material-symbols-outlined hover:scale-95"
									onClick={() => handleDelete(blog._id, event)}
								>
									delete
								</span>
								<h3 className="text-lg ">{blog.title}</h3>
								<p className="text-sm">{blog.snippet}</p>
								{/* <p className="text-sm text-right">
									~{" "}
									{formatDistanceToNow(new Date(blog.createdAt), {
										addSuffix: true,
									})}
								</p> */}
								<p className="text-sm text-right">
									~ {format(new Date(blog.createdAt), "dd MMM','yyyy")}
								</p>
								<Link to={`/blogs/edit/${blog._id}`}>
									<span class="material-symbols-outlined hover:scale-95 absolute right-12 bottom-3">
										edit
									</span>
								</Link>
								<Link to={`/blogs/${blog._id}`}>
									<span class="material-symbols-outlined hover:scale-95 absolute bottom-3 right-3">
										open_in_new
									</span>
								</Link>
							</div>
						))
					) : (
						<div className="m-auto">
							<p className="text-3xl text-white border-2 border-indi ">
								No Blogs to Read
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Blog;
