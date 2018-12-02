import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider'

import Banner from '../components/banner'
import SoftwareProject from '../components/software_project'
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
  date: {
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

export default class Software extends Component {
  render() {
    return (
      <div style={styles.events}>
        <Banner text="Software Projects" />
        <SoftwareProject
          title="React-Redux Projects"
          tags="ReactJS"
          contents="Handful of Full-Stack projects from online course"
          list="Weather Forecast App"
          list2="YouTube Search and Viewer App"
          // image={Software}
        />
        <SoftwareProject
          title="Web Development Catalog"
          tags="HTML, PHP, JS, CSS"
          contents="GitHub Repository from all of my projects and assignments from university course. Screenshots are from an example project"
          // image={Software}
        />
        <SoftwareProject
          title="Otter Flight Reservation System"
          tags="Android App"
          contents="App allows customers of an airline company to create accounts and manage reservations Demonstrated use-case scenarios for both users and administrators to manage SQLite database Created with Android Studio and applied Java focused design skills"
          // image={Software}
        />
        <SoftwareProject
          title='Parking Detector "Clamshell"'
          tags="Iot: Integrated Microcontroller Project"
          contents="Designed and fabricated a self-contained, 3d-printed parking detector. Communicates with a database to allows users to see available parking spots in crowded lots. Developed using Microcontroller, ultrasonic sensor, and solar panel"
          // image={Software}
        />
        <Divider variant="middle" style={{ marginTop: 50, marginBottom: 50 }} />
      </div>
    )
  }
}
