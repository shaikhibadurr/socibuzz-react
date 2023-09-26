import { Box } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        p: 2,
        background: (theme) => theme.palette.common.black,
      }}
    >
      Header
    </Box>
  )
}

export default Header
