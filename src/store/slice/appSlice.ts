import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  darkTheme: boolean;
}

const initialState: AppState = {
  darkTheme: false,
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
  },
});

export const { openDarkTheme, closeDarkTheme } = appSlice.actions;

export default appSlice.reducer;
