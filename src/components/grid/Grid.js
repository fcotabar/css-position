import "./Grid.css";
import React from "react";
import { GridItem } from "./GridItem";

export const Grid = () => {
  const numberOfItems = 6;
  let items = [];
  for (let i = 0; i < numberOfItems; i++) items.push(i + 1);
  console.log(items);

  return (
    <section>
      <div className="title">
        <h2>Basic grid configuration</h2>
      </div>
      <div className="gr-container">
        {items.map((el) => (
          <GridItem key={el} item={el} />
        ))}
      </div>
    </section>
  );
};
