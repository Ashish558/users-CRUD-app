import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Home from './pages/Home'
const theme = createTheme({
  palette: {
     background: {
        blue: '#1081e8c2',
     }
  },
  typography: {
     fontFamily: [
        "Open_Sans",
        "Poppins",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
     ].join(",")
  },
  overrides: {
    MuiTableRow: {
       root: {
          "&:last-child td": {
             borderBottom: 0,
          },
       }
    },
 },


})
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ listStyle: 'none' }} />
      <CssBaseline />
      <Home />

    </ThemeProvider>
  )
}


export default App
