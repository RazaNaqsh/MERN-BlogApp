import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const navigate = useNavigate();

	const [blogData, setBlogData] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBlogData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("http://localhost:4000/api/blogs", {
			method: "POST",
			body: JSON.stringify(blogData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await response.json();

		if (response.ok) {
			navigate("/");
		}
	};
	return (
		<main>
			<div className="flex flex-col items-center">
				<h1 className="my-5 text-2xl">Create New Blog</h1>
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
							className="w-full p-4 text-black"
						/>
					</div>
					<div>
						<input
							type="text"
							placeholder="Enter Snippet"
							name="snippet"
							onChange={handleChange}
							className="w-full p-4 text-black"
						/>
					</div>
					<div>
						<textarea
							name="content"
							onChange={handleChange}
							id=""
							cols="30"
							rows="10"
							placeholder="Enter Content here.."
							className="w-full p-4 text-black"
						></textarea>
					</div>
					<div className="m-auto">
						<button className="px-4 py-2 bg-indigo-500 rounded-md">
							Post Blog
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Create;
