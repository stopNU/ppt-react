import { useState } from "react";
import axios from "axios";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  const [positions, setPositions] = useState([]);
  const [open, setOpen] = useState(true);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const handleFetchPositions = async (e) => {
    // TEMPORARY
    const res = await axios.get(`${process.env.REACT_APP_API}/positions/`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    setPositions(res.data);
  };

  const handleAddPosition = async (e) => {
    // TEMPORARY
    await axios.post(
      `${process.env.REACT_APP_API}/positions/add`,
      {
        name: "Name" + Math.random(),
        category: "Crypto",
        price: "12",
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
  };

  return (
    <Container maxWidth="false">
      <Box sx={{ display: "flex" }}>
        <Sidebar
          open={open}
          onToggle={handleToggleDrawer}
          onAddPosition={handleAddPosition}
          onFetchPositions={handleFetchPositions}
        />
        <MainContent positions={positions} />
      </Box>
    </Container>
  );
};

export default Dashboard;
