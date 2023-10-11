import React from "react";
import Card from "../../Card/Card";
import styled from "./Home.module.css"

const Home = () => {
  return (
    <div className={styled.home}>
      <Card title="hello">Home</Card>
      <Card>Temp</Card>
      <Card>3</Card>
      <Card title="hell">4</Card>
    </div>
  );
};

export default Home;
