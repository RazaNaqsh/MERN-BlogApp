import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Create from "./pages/Create";

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
					path="/blogs/:id"
					element={<BlogDetails />}
				/>
				<Route
					path="/create"
					element={<Create />}
				/>
			</Routes>
		</div>
	);
}

export default App;
