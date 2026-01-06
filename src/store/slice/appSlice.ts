import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  darkTheme: boolean;
  asidebar: boolean;
}

const initialState: AppState = {
  darkTheme: false,
  asidebar: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openDarkTheme: (state: AppState) => {
      state.darkTheme = true;
    },
    closeDarkTheme: (state: AppState) => {
      state.darkTheme = false;
    },
    openAsidebar: (state: AppState) => {
      state.asidebar = true;
    },
    closeAsidebar: (state: AppState) => {
      state.asidebar = false;
    },
  },
});

export const { openDarkTheme, closeDarkTheme, openAsidebar, closeAsidebar } =
  appSlice.actions;

export default appSlice.reducer;
