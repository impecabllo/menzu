import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import LandingRoot from './LandingRoot'

const LandingWithTheme = props => {
  return (
    <MuiThemeProvider theme={ theme }>
      <LandingRoot { ...props } />
    </MuiThemeProvider>
  )
}

export default LandingWithTheme