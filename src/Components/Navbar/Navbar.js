import React from "react";
import styled from "./Navbar.module.css";
import { Link, useMatch, useResolvedPath} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styled.navbar}>
      <Link to="/" className={styled.title}>SwitchBoards</Link>
      <ul>
          <CustomLink to="/Switches" >Switches</CustomLink>
          <CustomLink to="/Distributors">Distributors</CustomLink>
      </ul>
    </nav>
  );
};

const CustomLink = ({to,children, ...props}) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path : resolvedPath.pathname, end : true})
  return (
    <li className={isActive ? styled.active : ""}>
      <Link to = {to}>{children}</Link>
    </li>
  )
}

export default Navbar;
