import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps) => {
  return async (dispatch) => {
    console.log("signup action creator", formProps);
    try {
      const response = await axios.post(
        "https://ppt-server.herokuapp.com/signup/",
        formProps
      );

      //Check response status?

      dispatch({
        type: AUTH_USER,
        payload: response.data.token,
      });
    } catch (e) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Email in use",
      });
    }
  };
};
