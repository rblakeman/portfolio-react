import React, { Component } from 'react'
const styles = {
  box: {
    backgroundColor: '#e9ecef',
    padding: '4rem 2rem',
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 500,
    color: '#5a5a5a',
    marginBottom: 50
  }
}

export default class Banner extends Component {
  renderBanner() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
        <p>
          {/* <a href="#">Primary Button</a> */}
          {/* <a href="#">Secondary Button</a> */}
        </p>
      </div>
    )
  }

  render() {
    return (
      <div style={styles.box}>
        {this.props.text}
        {this.props.description}
      </div>
    )
  }
}
