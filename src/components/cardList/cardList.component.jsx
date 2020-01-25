import React from "react";
import classes from "./cardList.module.css";
import { Card } from "../card/card.component";

const cardList = props => (
  <div className={classes.cardList}>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default cardList;

//or
// export const CardList = props => {// notes: CardList cannot be a small "c" in this format :O
//   return <h1>test</h1>;
// };
