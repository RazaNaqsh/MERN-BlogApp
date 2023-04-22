import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Create from "./pages/Create";
import EditBlog from "./pages/EditBlog";
import About from "./pages/About";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/blogs/:id"
					element={<BlogDetails />}
				/>
				<Route
					path="/create"
					element={<Create />}
				/>
				<Route
					path="/blogs/edit/:id"
					element={<EditBlog />}
				/>
			</Routes>
		</div>
	);
}

export default App;
