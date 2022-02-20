import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  //const auth = useAuth();
  const authState = useSelector((state) => state.auth);
  const isUserAuthenticated = authState.authenticated !== "";

  return isUserAuthenticated ? children : <Navigate to="/signup" />;
};

export default PrivateRoute;
