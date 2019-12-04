import React from "react";
import "./card.css";

export const Card = ({ monster }) => {
  console.log(monster);

  return (
    <div key={monster.id} className="card-container">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt="robot"
      />
      <h3>{monster.name}</h3>
      <p>{monster.email}</p>
    </div>
  );
};
