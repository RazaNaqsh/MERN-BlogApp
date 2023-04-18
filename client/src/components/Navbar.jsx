import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="">
			<nav className="w-[85%] m-auto flex items-center justify-between px-8 py-6">
				<Link to="/">
					<h3 className="text-3xl text-blue-200">BlogApp</h3>
				</Link>
				<div className="space-x-8">
					<Link to="/create">
						<span>Create</span>
					</Link>
					<Link to="/about">
						<span>About</span>
					</Link>
					<Link to="https://github.com/RazaNaqsh/MERN-BlogApp">
						<span>Github</span>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
