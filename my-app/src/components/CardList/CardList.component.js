import React from "react";
import Card from "./../Card/Card.component";

// When looping through an array in the DOM we have to add a key prop
// so it knows which card to remove from the DOM
// key={i}
const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((robot, i) => {
				return (
					<Card key={i} id={robot.id} name={robot.name} email={robot.email} />
				);
			})}
		</div>
	);
};

export default CardList;
