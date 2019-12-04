import React from "react";
import { Card } from "../card/card.component";
import "./card-list.css";

export const MonsterList = ({ monsters }) => {
  return (
    <>
      <div className="monster-lists">
        {monsters.map(monster => (
          <div className="monster-item">
            <Card key={monster.id} monster={monster} />
          </div>
        ))}
      </div>
    </>
  );
};
