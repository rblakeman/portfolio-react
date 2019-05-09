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
  nameText: { color: '#fff', textDecoration: 'none', fontSize: 'larger' }
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
          <Event style={{ paddingRight: '5px' }} /> Events
        </MenuItem>
        <MenuItem
          onClick={() => this.props.onPageClick('Software')}
          style={styles.linkText}
        >
          <Code style={{ paddingRight: '5px' }} /> Software
        </MenuItem>
        <MenuItem
          onClick={() => this.props.onPageClick('Games')}
          style={styles.linkText}
        >
          <VideogameAsset style={{ paddingRight: '5px' }} /> Games
        </MenuItem>
        <MenuItem
          onClick={() => this.props.onPageClick('Research')}
          style={styles.linkText}
        >
          <Edit style={{ paddingRight: '5px' }} /> Research
        </MenuItem>
        {/* </div> */}
        <MenuItem
          onClick={() => this.props.onPageClick('Resume')}
          style={styles.linkText}
        >
          <Description style={{ paddingRight: '5px' }} /> Resume
        </MenuItem>
      </AppBar>
    )
  }
}
