import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
//import styled from "styled-components";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Nav = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  a {
    color: ${({ theme }) => theme.palette.secondary.light};
  }
  .active {
    //color: green;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const Header = (props) => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Container maxWidth="false">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          textAlign: "center",
          minHeight: "70px",
        }}
      >
        <Nav>
          <StyledNavLink
            to="/dashboard"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            <Typography variant="p">
              Dashboard
            </Typography>
          </StyledNavLink>
          <StyledNavLink
            to="/signup"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            <Typography variant="p">Sign Up</Typography>
          </StyledNavLink>

          <StyledNavLink
            to={authenticated ? "/signout" : "/signin"}
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            <Typography variant="p">
              {authenticated ? "Sign Out" : "Sign in"}
            </Typography>
          </StyledNavLink>
        </Nav>
      </Box>
    </Container>
  );
};

export default Header;
