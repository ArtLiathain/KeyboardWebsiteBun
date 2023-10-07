import React from "react";
import styled from "./Card.module.css";

const Card = ({ children, classes }) => {
  return <div className={`${classes} ${styled.card}`}>{children}</div>;
};

export default Card;
