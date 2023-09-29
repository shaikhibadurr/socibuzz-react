import Router from 'router'
import './index.css'
import Button from '@mui/material/Button'

function App() {
  return (
    <>
      <Router />
      <Button
        sx={{
          borderRadius: 0,
          background: (theme) => theme.palette.primary.light,
        }}
        variant="contained"
      >
        Hello World!
      </Button>
    </>
  )
}

export default App
