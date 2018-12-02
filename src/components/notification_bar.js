import React from 'react'
import AppBar from '@material-ui/core/AppBar'
const styles = {
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    marginTop: 45,
    backgroundColor: '#0275d8',
    justifyContent: 'center'
  },
  linkText: {
    textDecoration: 'none',
    color: 'white'
  }
}

export default (props) => {
  return (
    <AppBar style={styles.appBar} position="relative">
      <a
        style={styles.linkText}
        href="https://github.com/rblakeman/portfolio-react"
      >
        Click here to view Repository
      </a>
    </AppBar>
  )
}
