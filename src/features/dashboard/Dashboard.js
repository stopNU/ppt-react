import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  //const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth="false">
      <Box sx={{ display: "flex" }}>
        <Sidebar open={open} onToggle={handleToggleDrawer} />
        <MainContent />
      </Box>
    </Container>
  );
};

export default Dashboard;
