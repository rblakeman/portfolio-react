import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider'

// IMAGES
import WeatherIMG from '../img/software/react/weather.png'
import YouTubeIMG from '../img/software/react/youtube.png'
//
import HomeWebIMG from '../img/software/web/home.png'
import LogInIMG from '../img/software/web/log_in.png'
import AdminIMG from '../img/software/web/admin.png'
import AddIMG from '../img/software/web/add.png'
import UpdatedIMG from '../img/software/web/updated.png'
//
import HomeAndroidIMG from '../img/software/android/home_screen.png'
import CreateAccountSuccessIMG from '../img/software/android/create_account_success.png'
import CreateAccountFailIMG from '../img/software/android/create_account_fail.png'
import ReserveIMG from '../img/software/android/reserve.png'
import CancelReservationIMG from '../img/software/android/cancel_reservation.png'
//
import TopViewIMG from '../img/software/clamshell/top_view.jpg'
import BottomViewIMG from '../img/software/clamshell/bottom_view.jpg'
import DiagramIMG from '../img/software/clamshell/process_diagram.png'

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
          list={['Weather Forecast App', 'YouTube Search and Viewer App']}
          images={[
            { text: 'Weather', img: WeatherIMG },
            { text: 'YouTube', img: YouTubeIMG }
          ]}
        />
        <SoftwareProject
          title="Web Development Catalog"
          tags="HTML, PHP, JS, CSS"
          contents="GitHub Repository from all of my projects and assignments from university course. Screenshots are from final project for course."
          images={[
            { text: 'Home', img: HomeWebIMG },
            { text: 'LogIn', img: LogInIMG },
            { text: 'Admin', img: AdminIMG },
            { text: 'Add', img: AddIMG },
            { text: 'Updated', img: UpdatedIMG }
          ]}
        />
        <SoftwareProject
          title="Otter Flight Reservation System"
          tags="Android App"
          contents="App allows customers of an airline company to create accounts and manage reservations Demonstrated use-case scenarios for both users and administrators to manage SQLite database Created with Android Studio and applied Java focused design skills"
          images={[
            { text: 'Home', img: HomeAndroidIMG },
            { text: 'Create Account', img: CreateAccountSuccessIMG },
            { text: 'Create Account (fail)', img: CreateAccountFailIMG },
            { text: 'Reserve', img: ReserveIMG },
            { text: 'Cancel Reservation', img: CancelReservationIMG }
          ]}
        />
        <SoftwareProject
          title='Parking Detector "Clamshell"'
          tags="Iot: Integrated Microcontroller Project"
          contents="Designed and fabricated a self-contained, 3d-printed parking detector. Communicates with a database to allows users to see available parking spots in crowded lots. Developed using Microcontroller, ultrasonic sensor, and solar panel"
          images={[
            { text: 'Top', img: TopViewIMG },
            { text: 'Bottom', img: BottomViewIMG },
            { text: 'Diagram', img: DiagramIMG }
          ]}
        />
        <Divider variant="middle" style={{ marginTop: 50, marginBottom: 50 }} />
      </div>
    )
  }
}
