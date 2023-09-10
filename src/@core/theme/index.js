import { createTheme } from "@mui/material";
import colors from "../../assets/scss/_themes-vars.module.scss";
import themePalette from "./palette";

export const themes = (customization) => {
  const themeOption = {
    colors: colors,
    customization,
  };

  const themeOptions = {
    ...themePalette(themeOption),
  };

  const themes = createTheme(themeOptions);

  return themes;
};

export default themes;
