import axios from "axios";
import { authActions } from "./auth-slice";

export const signup = (formProps, callback) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/users/signup/`,
        formProps
      );
      /*if (response.status !== 200) {
        throw new Error("Failed sending to server.");
      }*/

      return response;
    };

    try {
      const response = await sendRequest();

      dispatch(authActions.authenticateUser(response.data.token));
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (e) {
      console.log("e", e.message);
      dispatch(authActions.authenticateError("Email in use"));
    }
  };
};

export const signin = (formProps, callback) => {
  return async (dispatch) => {
    
    const sendRequest = async () => {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/users/signin/`,
        formProps
      );

      return response;
    };

    try {
      const response = await sendRequest();

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
