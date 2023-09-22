import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import BasicCard from './components/Card'
import { changeThemeMode } from 'redux/slices/customization.slice'
import ThemeComponent from '@core/theme/ThemeComponent'

function App() {
  const dispatch = useDispatch()
  return (
    <>
      <BasicCard />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <Typography variant="h1">This is Heading</Typography>
      <Button variant="contained" onClick={() => dispatch(changeThemeMode())}>
        Change Mode
      </Button>
      <Typography variant="h1">This is Heading</Typography>
      <Typography color="secondary" variant="h1">
        This is Heading
      </Typography>
    </>
  )
}

export default App
