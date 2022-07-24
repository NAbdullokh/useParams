import React from "react";
import NavbarItems from "../../mock/navbar";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "./style";

const Navbar = () => {
  const active = ({ isActive }) => {
    return {
      color: isActive ? " #FF7010" : "white",
      textDecoration: "none",
    };
  };
  return (
    <>
      <Container>
        {NavbarItems.map((value) => {
          return (
            <NavLink key={value.id} style={active} to={value.path}>
              {value.title}
            </NavLink>
          );
        })}
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
