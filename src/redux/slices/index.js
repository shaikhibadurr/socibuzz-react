import customizationSlice from "./customization.slice";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  customization: customizationSlice,
});
