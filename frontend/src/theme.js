import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5555bb',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000000',
    },
  },
  typography: {
    "fontFamily": "Roboto",
    "fontSize": 15,
    "fontWeightLight": 100,
    "fontWeightRegular": 200,
    "fontWeightMedium": 300
   },
  shape: {
    borderRadius: 0,
  }, 
})

export default theme