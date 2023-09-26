import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import BasicCard from 'components/Card'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeThemeMode } from 'redux/slices/customization.slice'
const Dashboard = () => {
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

export default Dashboard
