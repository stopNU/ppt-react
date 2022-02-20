import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  .active {
    color: green;
  }
`;

const Header = () => {
  const { authenticated } = useSelector((state) => state.auth);
  let renderLinks;

  if (authenticated) {
    renderLinks = (
      <>
        <NavLink
          to="/signout"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          Sign Out
        </NavLink>
        <NavLink
          to="/feature"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          Feature
        </NavLink>
      </>
    );
  } else {
    renderLinks = (
      <>
        <NavLink
          to="/signup"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/signin"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          Sign In
        </NavLink>
      </>
    );
  }

  return (
    <header>
      <Nav>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          Homepage
        </NavLink>
        {renderLinks}
      </Nav>
    </header>
  );
};

export default Header;
