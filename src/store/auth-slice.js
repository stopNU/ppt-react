import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: localStorage.getItem("token") || "",
    errorMessage: "",
  },
  reducers: {
    authenticateUser: (state, action) => {
      state.authenticated = action.payload;
    },
    authenticateError: (state, action) => {
      state.errorMessage = action.payload;
    },
    signOut: (state) => {
      state.authenticated = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
