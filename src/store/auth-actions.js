import axios from "axios";
import { authActions } from "./auth-slice";

export const signup = (formProps, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/signup/`,
        formProps
      );

      //Check response status?

      dispatch(authActions.authenticateUser(response.data.token));
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (e) {
      dispatch(authActions.authenticateError("Email in use"));
    }
  };
};

export const signin = (formProps, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/signin/`,
        formProps
      );

      dispatch(authActions.authenticateUser(response.data.token));
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (e) {
      dispatch(authActions.authenticateError("Error logging in"));
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");

    dispatch(authActions.signOut());
  };
};
