export default function themePalette(theme) {
  return {
    mode: theme.customization.mode,
    primary: {
      main: theme.customization?.primary,
    },
    secondary: {
      main: theme.customization?.secondary,
    },
  }
}
