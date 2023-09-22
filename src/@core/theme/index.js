import { createTheme } from '@mui/material'
import colors from '../../assets/scss/_themes-vars.module.scss'
import themePalette from './palette'
import ThemeTypography from './typography'

export const themes = (customization) => {
  const themeOption = {
    colors: colors,
    customization,
  }

  const themeOptions = {
    palette: themePalette(themeOption),
    typography: ThemeTypography(themeOption),
  }

  const themes = createTheme(themeOptions)

  return themes
}

export default themes
