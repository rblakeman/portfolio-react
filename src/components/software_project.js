import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
    padding: 16,
    backgroundColor: '#f7fafd'
  },
  text: {
    margin: 15,
    maxWidth: 500
  },
  title: {
    fontSize: '50px',
    color: '#5a5a5a',
    fontWeight: 400,
    lineHeight: 1,
    marginBottom: 15
  },
  tags: {
    fontSize: '38px',
    color: '#6c757d',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '-0.05rem',
    marginTop: 15,
    marginBottom: 20
  },
  description: {
    fontSize: '1.25rem',
    color: '#5a5a5a',
    fontWeight: 300,
    lineHeight: 1.5,
    marginTop: 10
  },
  picture: {
    marginLeft: 15
  }
}

export default class SoftwareProject extends Component {
  renderText() {
    if (this.props.list) {
      return (
        <div style={styles.text}>
          <div style={styles.title}>{this.props.title}</div>
          <div style={styles.tags}>{this.props.tags}</div>
          <div style={styles.description}>
            {this.props.contents}
            {this.renderList()}
          </div>
        </div>
      )
    } else {
      return (
        <div style={styles.text}>
          <div style={styles.title}>{this.props.title}</div>
          <div style={styles.tags}>{this.props.tags}</div>
          <div style={styles.description}>{this.props.contents}</div>
        </div>
      )
    }
  }

  renderList() {
    return (
      <ul>
        <li>{this.props.list}</li>
        <li>{this.props.list2}</li>
      </ul>
    )
  }

  renderPicture() {
    return (
      <div style={styles.picture}>
        <img src={this.props.image} alt="Software Project Image" />
      </div>
    )
  }

  render() {
    return (
      <Paper style={styles.container}>
        {this.renderText()}
        {this.renderPicture()}
      </Paper>
    )
  }
}
