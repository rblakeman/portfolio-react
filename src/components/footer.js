import React, { Component } from 'react'

import { Button } from '@material-ui/core'
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded'

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'space-between',
    margin: 'auto', //'0px 32px 32px 32px',
    padding: '0px 48px 48px 48px', //'0px 16px 16px 16px',
    maxWidth: '1250px'
  },
  scrollButton: {
    // width: '64px',
    height: '64px',
    bottom: '30px',
    right: '30px',
    padding: '10px',
    position: 'fixed',
    borderRadius: '100%',
    backgroundColor: '#FFFFFF',
    color: '#0275D8',
    boxShadow:
      '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
  }
}

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hidden: true
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      if (window.pageYOffset > 160) {
        this.setState({ hidden: false })
      } else {
        this.setState({ hidden: true })
      }
    }
  }

  componentWillUnmount() {
    window.onscroll = null
  }

  render() {
    return (
      <div style={styles.footer}>
        <p style={{ margin: 0 }}>
          &copy; 2018 Ryan Blakeman &middot;
          <a href="mailto:rblakeman31@gmail.com">Email</a> &middot;
          <a href="https://www.linkedin.com/in/rblakeman/">LinkedIn</a>
          <br />
        </p>
        <Button
          style={
            this.state.hidden
              ? { ...styles.scrollButton, visibility: 'hidden' }
              : styles.scrollButton
          }
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <KeyboardArrowUpRounded style={{ height: '36px', width: '36px' }} />
        </Button>
      </div>
    )
  }
}
