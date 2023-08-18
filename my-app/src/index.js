import React, { StrictMode } from "react";

// REACT 18 UPDATE: (previously) import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./containers/App";
import "tachyons";

// OLD WAY:
// const root = ReactDOM.createRoot(document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
