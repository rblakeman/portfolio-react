import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import MenuItem from '@material-ui/core/MenuItem'
const styles = {
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#343a40',
    justifyContent: 'space-between'
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
      <div style={styles.left}>
        <Link style={{ textDecoration: 'none' }} to="/portfolio-react/home">
          <MenuItem style={styles.nameText}>Ryan Blakeman</MenuItem>
        </Link>
        <Link style={styles.linkText} to="/portfolio-react/home">
          <MenuItem style={styles.linkText}>Home</MenuItem>
        </Link>
        <Link style={styles.linkText} to="/portfolio-react/software">
          <MenuItem style={styles.linkText}>Software</MenuItem>
        </Link>
        <Link style={styles.linkText} to="/portfolio-react/games">
          <MenuItem style={styles.linkText}>Games</MenuItem>
        </Link>
        <Link style={styles.linkText} to="/portfolio-react/research">
          <MenuItem style={styles.linkText}>Research</MenuItem>
        </Link>
      </div>
      <Link style={styles.linkText} to="/portfolio-react/resume">
        <MenuItem style={styles.linkText}>Resume</MenuItem>
      </Link>
    </AppBar>
  )
}
