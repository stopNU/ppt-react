import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/auth/PrivateRoute";
import Header from "./components/layout/Header";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Dashboard from "./features/dashboard/Dashboard";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";
import Footer from "./components/layout/Footer";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/signout"
              element={
                <PrivateRoute>
                  <Signout />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
