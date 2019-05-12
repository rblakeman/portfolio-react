import React, { Component } from 'react'
import { AppBar, MenuItem, Typography } from '@material-ui/core'
import {
  Event,
  Code,
  VideogameAsset,
  Edit,
  Description
} from '@material-ui/icons'
const styles = {
  appBar: {
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#343a40',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '46px',
    padding: '0px 20px'
  },
  left: {
    display: 'flex',
    flexDirection: 'row'
  },
  linkText: { color: '#ddd', textDecoration: 'none' },
  nameText: { color: '#fff', textDecoration: 'none', fontSize: 'larger' },
  icons: { paddingRight: '5px' }
}

export default class MenuBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AppBar style={styles.appBar}>
        {/* <div style={styles.left}> */}
        {/* <MenuItem style={styles.nameText}>Ryan Blakeman</MenuItem> */}
        <MenuItem
          onClick={() => this.props.onPageClick('Events')}
          style={styles.linkText}
        >
          <Event style={styles.icons} /> Events
        </MenuItem>
        <MenuItem
          onClick={() => this.props.onPageClick('Software')}
          style={styles.linkText}
        >
          <Code style={styles.icons} /> Software
        </MenuItem>
        <MenuItem
          onClick={() => this.props.onPageClick('Games')}
          style={styles.linkText}
        >
          <VideogameAsset style={styles.icons} /> Games
        </MenuItem>
        <MenuItem
          onClick={() => this.props.onPageClick('Research')}
          style={styles.linkText}
        >
          <Edit style={styles.icons} /> Research
        </MenuItem>
        {/* </div> */}
        <MenuItem
          onClick={() => this.props.onPageClick('Resume')}
          style={styles.linkText}
        >
          <Description style={styles.icons} /> Resume
        </MenuItem>
      </AppBar>
    )
  }
}
