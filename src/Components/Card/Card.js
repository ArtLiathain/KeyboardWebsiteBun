import React from "react";
import styled from "./Card.module.css";

const Card = ({ children, classes, title }) => {
  if (title === null) {
    return <div className={`${classes} ${styled.card}`}>{children}</div>;
  }
  return (
    <div className={`${classes} ${styled.card}`}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Card;
