import React from 'react'
import { AppBar, MenuItem, Typography } from '@material-ui/core'
const styles = {
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#343a40',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '46px',
    padding: '0px 20px'
  },
  left: {
    display: 'flex',
    flexDirection: 'row'
  },
  linkText: { color: '#ddd', textDecoration: 'none' },
  nameText: { color: '#fff', textDecoration: 'none', fontSize: 'larger' }
}

export default (props) => {
  return (
    <AppBar style={styles.appBar}>
      {/* <div style={styles.left}> */}
      <MenuItem style={styles.nameText}>Ryan Blakeman</MenuItem>
      {/* <MenuItem style={styles.linkText}>Home</MenuItem>
      <MenuItem style={styles.linkText}>Software</MenuItem>
      <MenuItem style={styles.linkText}>Games</MenuItem>
      <MenuItem style={styles.linkText}>Research</MenuItem> */}
      {/* </div> */}
      {/* <MenuItem style={styles.linkText}>Resume</MenuItem> */}
    </AppBar>
  )
}
