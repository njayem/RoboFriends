import React from "react";
import Card from "./Card";

// When looping through an array in the DOM we have to add a key prop
// so it knows which card to remove from the DOM
// key={i}
const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((user, i) => {
				return (
					<Card
						key={i}
						id={robots[i].id}
						name={robots[i].name}
						email={robots[i].email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
