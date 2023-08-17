
import React from "react";

// Destructure props and pass them into the function like this:
const Card = ({ id, name, email }) => {
    return(
      <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
        <img alt='robots'src={`https://robohash.org/${id}?200x200`}/>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  
}

export default Card;