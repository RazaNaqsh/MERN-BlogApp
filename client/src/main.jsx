import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BlogContextProvider } from "./context/BlogContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<BlogContextProvider>
				<App />
			</BlogContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
