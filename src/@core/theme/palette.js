export default function themePalette(theme) {
  console.log('theme', theme.customization.mode)
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
