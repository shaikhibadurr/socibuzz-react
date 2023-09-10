import { createSlice } from "@reduxjs/toolkit";
import colors from "../../assets/scss/_themes-vars.module.scss";

const initialState = {
  palette: {
    primary: {
      main: colors?.primaryMain,
    },
    secondary: {
      main: colors?.secondaryMain,
    },
  },
};

const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    addPrimaryColor: (state, action) => {
      state.palette.primary.main = action.payload;
    },
    addSecondaryColor: (state, action) => {
      state.palette.secondary.main = action.payload;
    },
  },
});

export const { addPrimaryColor, addSecondaryColor } =
  customizationSlice.actions;
export default customizationSlice.reducer;
