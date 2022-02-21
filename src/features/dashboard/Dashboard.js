import Sidebar from "./Sidebar";

// MUI
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
    <StyledContainer maxWidth="false">
      <Sidebar />
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </StyledContainer>
  );
};

export default Dashboard;
