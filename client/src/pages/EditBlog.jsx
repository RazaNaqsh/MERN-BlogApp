import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogContext } from "../hooks/useBlogContext";

const EditBlog = () => {
	const navigate = useNavigate();

	const { dispatch } = useBlogContext();

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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBlog((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("http://localhost:4000/api/blogs/" + id, {
			method: "PATCH",
			body: JSON.stringify(blog),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();

		if (response.ok) {
			console.log(data);
			navigate("/");
		}
	};
	return (
		<main>
			<div className="flex flex-col items-center">
				<h1 className="my-5 text-2xl">Edit Blog Details</h1>
				{blog && (
					<form
						onSubmit={handleSubmit}
						className="flex flex-col w-2/5 gap-8"
					>
						<div>
							<input
								type="text"
								placeholder="Enter Title"
								name="title"
								onChange={handleChange}
								value={blog.title}
								className="w-full p-4 text-black"
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="Enter Snippet"
								name="snippet"
								onChange={handleChange}
								value={blog.snippet}
								className="w-full p-4 text-black"
							/>
						</div>
						<div>
							<textarea
								name="content"
								onChange={handleChange}
								value={blog.content}
								id=""
								cols="30"
								rows="10"
								placeholder="Enter Content here.."
								className="w-full p-4 text-black"
							></textarea>
						</div>
						<div className="m-auto">
							<button className="px-4 py-2 bg-indigo-500 rounded-md">
								Submit Edit
							</button>
						</div>
					</form>
				)}
			</div>
		</main>
	);
};

export default EditBlog;
