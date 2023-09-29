import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material'
import BasicCard from 'components/Card'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
  changeFontFamily,
  changeThemeColor,
  changeThemeMode,
} from 'redux/slices/customization.slice'
import { ThemeConfig } from 'utils/config'
const Dashboard = () => {
  const dispatch = useDispatch()
  return (
    <>
      <BasicCard />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <Typography variant="h1">This is Heading</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => dispatch(changeThemeMode())}>
          Change Mode
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            dispatch(changeThemeColor(ThemeConfig.themeColor.CLASSIC))
          }
        >
          Classic
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            dispatch(changeThemeColor(ThemeConfig.themeColor.DEFAULT))
          }
        >
          Default
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            dispatch(changeThemeColor(ThemeConfig.themeColor.STANDARD))
          }
        >
          Standard
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            dispatch(changeFontFamily(ThemeConfig.fontFamily.DMSANS))
          }
        >
          DM Sans
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            dispatch(changeFontFamily(ThemeConfig.fontFamily.LIBREFRANKLIN))
          }
        >
          LIBREFRANKLIN
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            dispatch(changeFontFamily(ThemeConfig.fontFamily.NUNITOSANS))
          }
        >
          Nunito Sans
        </Button>
        <Button
          variant="contained"
          onClick={
            () =>
              dispatch(changeFontFamily(ThemeConfig.fontFamily.PLUSJAKARTASANS)) //
          }
        >
          Plus Jakartasans
        </Button>
      </Stack>
      <Typography variant="h1">This is Heading</Typography>
      <Typography color="secondary" variant="h1">
        This is Heading
      </Typography>
    </>
  )
}

export default Dashboard
