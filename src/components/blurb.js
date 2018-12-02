import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
const styles = {
  blurb: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 280,
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: 1.2,
    color: '#5a5a5a',
    marginTop: 5,
    marginBottom: 5
  },
  ptext: {
    textAlign: 'center',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#5a5a5a',
    marginTop: 0,
    marginBottom: 5
  },
  button: {
    backgroundColor: '#0275d8'
  }
}

export default class Blurb extends Component {
  render() {
    let radius = '0%'
    if (this.props.circle) {
      radius = '50%'
    }
    return (
      <div style={styles.blurb}>
        <img
          style={{ borderRadius: radius }}
          src={this.props.image}
          alt="CSUMB Logo"
          width="140"
          height="140"
        />
        <h2 style={styles.title}>{this.props.title}</h2>
        <p style={styles.ptext}>{this.props.contents}</p>
        <p>
          <Button
            style={styles.button}
            variant="contained"
            color="primary"
            href={this.props.button_url}
          >
            {this.props.button_text} &raquo;
          </Button>
        </p>
      </div>
    )
  }
}
