import React from "react";

import "./GridTemplateArea.css";

export const GridTemplateArea = ({ className }) => {
  return (
    <section className={className}>
      <h1>Grid Template Area</h1>

      <h2>Template Area (default)</h2>
      <p>Grid template-area: 6 rows * 5 columns</p>
      <div className={`grid`}>
        <div className="header">Header</div>
        <div className="sidebar">Sidebar</div>
        <div className="main">Main</div>
        <div className="footer">Footer</div>
      </div>
    </section>
  );
};
