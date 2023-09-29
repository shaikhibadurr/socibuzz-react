import { alpha } from '@mui/material/styles'
export default function themePalette(theme) {
  return {
    mode: theme.customization.mode,
    primary: {
      light: alpha(theme.customization?.primary, 0.5),
      main: theme.customization?.primary,
    },
    secondary: {
      main: theme.customization?.secondary,
    },
  }
}
