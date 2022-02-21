import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  //const auth = useAuth();
  const authState = useSelector((state) => state.auth);
  const isUserAuthenticated = authState.authenticated !== "";

  return isUserAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
