import React, { useState } from "react";

const UnilectivesTitle: React.FC = () => {
  const [color, setColor] = useState("#1279F2");

  const toggleColor = () => {
    setColor((currentColor) =>
      currentColor === "#1279F2" ? "black" : "#1279F2"
    );
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "58px",
    marginTop: "20px",
    marginBottom: "10px",
    fontWeight: "700",
    color: color,
  };

  return (
    <p style={titleStyle} onClick={toggleColor}>
      unilectives
    </p>
  );
};

export default UnilectivesTitle;
