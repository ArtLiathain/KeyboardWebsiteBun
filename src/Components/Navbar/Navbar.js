import React from "react";
import styled from "./Navbar.module.css";
import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styled.navbar}>
      <Link to="/" className={styled.title}>
        Home
      </Link>
      <ul>
        <CustomList href="/GroupBuys">GroupBuys</CustomList>
        <CustomList href="/GroupBuyers">GroupBuyers</CustomList>
      </ul>
    </nav>
  );
};

const CustomList = ({ href, children, ...props }) => {
  const resolvedPath = useResolvedPath(href);
  const isActive = useMatch({ path : resolvedPath.pathname, end : true})
  
  return (
    <li className={isActive ? styled.active : "" }>
      <Link to={href}>{children}</Link>
    </li>
  );
};

export default Navbar;
