import React from "react";

const Card = (props) => {
  console.log(props.name);
  return (
    <div className="card">
      <img src={props.image} className="card-img" alt="pic" />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <button onClick={props.onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;
