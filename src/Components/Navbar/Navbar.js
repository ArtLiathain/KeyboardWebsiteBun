import React from "react";
import styled from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styled.navbar}>
      <a href="/Switchboards" className={styled.title}>SwitchBoards</a>
      <ul>
        <li className={styled.active}>
          <a href="/Switches" >Switches</a>
        </li>
        <li>
          <a href="/Distributors">Distributors</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
