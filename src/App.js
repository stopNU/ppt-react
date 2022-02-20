import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/auth/PrivateRoute";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

function App() {
  return (
    <div>
      <Header />
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
            path="/feature"
            element={
              <PrivateRoute>
                <Feature />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <footer>Foorter</footer>
    </div>
  );
}

export default App;
