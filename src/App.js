import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import themes from "./@core/theme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addPrimaryColor } from "./redux/slices/customization.slice";
import { green } from "@mui/material/colors";
import BasicCard from "./components/Card";

function App() {
  const dispatch = useDispatch();
  const ThemeCustomization = useSelector((state) => state.customization);
  useEffect(() => {
    // dispatch(addPrimaryColor());
  });

  return (
    <>
      <ThemeProvider theme={themes(ThemeCustomization)}>
        <BasicCard />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <Typography variant="h1">This is Heading</Typography>
        <Typography color="primary.main" variant="h1">
          This isحخدرآ
        </Typography>
        <Typography color="primary.dark" variant="h1">
          This is Heading
        </Typography>
        <Typography color="primary" variant="h1">
          New Theme
        </Typography>
        <Typography color="secondary" variant="h1">
          This is Heading
        </Typography>
        <Typography variant="h1">This is Heading</Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
