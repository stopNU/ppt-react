import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MainContent = ({ positions }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        {positions.map((position) => (
          <Grid item xs={3} key={position._id}>
            <Item>
              <Typography paragraph>Name: {position.name}</Typography>
              <Typography paragraph>Category: {position.category}</Typography>
              <Typography paragraph>Price: {position.price}</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;
