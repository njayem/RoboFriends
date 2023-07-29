import React from "react";

// Render whatever is inside the Scroll component tags!
// We can use children
// Parent "App" didn't pass any props to Scroll
// BUT Scroll can still use "props.children" to access and render
// the props of its children which in this case are the "CardList"
// props aka robots

const Scroll = (props) => {
	return (
		<div
			style={{
				overflowY: "scroll",
				border: "2px solid black",
				borderColor: "#0ccac4",
				height: "700px",
			}}>
			{props.children}
		</div>
	);
};

export default Scroll;
