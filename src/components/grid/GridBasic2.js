import React from "react";

import "./GridBasic2.css";

export const GridBasic2 = ({ className }) => {
  return (
    <section className={`${className}`}>
      <h1>Grid basic 2</h1>

      <h2>Default setup</h2>
      <p>Grid position default: 4 rows * 3 columns</p>
      <div className={`grid`}>
        <div className="grid__item">1</div>
        <div className="grid__item">2</div>
        <div className="grid__item">3</div>
        <div className="grid__item">4</div>
        <div className="grid__item">5</div>
        <div className="grid__item">6</div>
      </div>

      <h2>Grid flow: Columns</h2>
      <p>Grid position (grid-auto-flow: columns): 4 rows * 3 columns</p>
      <div className={`grid__column`}>
        <div className="grid__item">1</div>
        <div className="grid__item">2</div>
        <div className="grid__item">3</div>
        <div className="grid__item">4</div>
        <div className="grid__item">5</div>
        <div className="grid__item">6</div>
      </div>

      <h2>Grid position: Items</h2>
      <p>Grid position (change items positions): 4 rows * 3 columns</p>
      <div className={`grid__position`}>
        <div className="grid__item">1</div>
        <div className="grid__item">2</div>
        <div className="grid__item">3</div>
        <div className="grid__item">4</div>
        <div className="grid__item">5</div>
        <div className="grid__item">6</div>
      </div>
    </section>
  );
};
