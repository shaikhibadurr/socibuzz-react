import { ThemeProvider } from '@emotion/react'
import { CssBaseline, useTheme } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import themes from '.'

const ThemeComponent = ({ children }) => {
  const ThemeCustomization = useSelector((state) => state.customization)
  return (
    <ThemeProvider theme={themes(ThemeCustomization)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
