import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";

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
    <AppBar position="static">
      <Container
        maxWidth="false"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          textAlign: "center",
          minHeight: "64px",
        }}
      >
        <Nav>
          <StyledNavLink
            to="/dashboard"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            <Typography variant="p">Dashboard</Typography>
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
      </Container>
    </AppBar>
  );
};

export default Header;
