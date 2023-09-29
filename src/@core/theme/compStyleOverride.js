export default function componentStyleOverrides(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: 'overlay',
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            height: '4rem',
            borderRadius: '0.5rem',
            backgroundClip: 'content-box',
            backgroundImage: `linear-gradient(${theme.customization.secondary}, ${theme.customization.primary})`,
          },
          '&::-webkit-scrollbar-track': {
            opacity: 0,
            margin: 0,
            padding: 0,
          },
        },
      },
    },
  }
}
