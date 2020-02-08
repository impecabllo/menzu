import { createMuiTheme } from '@material-ui/core/styles'

const fontFamily = 'sans-serif'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#48C8DB',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily,
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    h3: {
      fontFamily,
      color: '#262626',
      fontWeight: 600,
    },
    h4: {
      fontFamily,
      color: '#262626',
    },
    h5: {
      fontFamily,
      color: '#262626',
    },
    h6: {
      fontFamily,
      color: '#262626',
    },
    body1: {
      fontFamily,
      color: '#262626',
      lineHeight: '20px',
    },
    body2: {
      fontFamily,
      color: '#262626',
    }
  }
})

export default theme