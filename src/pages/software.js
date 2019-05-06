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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJs,
  faHtml5,
  faPhp,
  faCss3Alt,
  faAndroid,
  faJava,
  faRaspberryPi
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faMicrochip } from '@fortawesome/free-solid-svg-icons'

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

const FA_SIZE = '5x'

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
          icons={[
            {
              obj: (
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: 'rgb(100,212,242)', marginLeft: '10px' }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            },
            {
              obj: (
                <FontAwesomeIcon
                  icon={faJs}
                  style={{ color: 'rgb(246,222,56)', marginLeft: '10px' }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            }
          ]}
        />
        <SoftwareProject
          title="Web Development Catalog"
          tags="HTML, PHP, JS, CSS"
          contents="GitHub Repository from all of my projects and assignments from university course. Screenshots are from final project, demonstrating the basic CRUD operations on the database."
          images={[
            { text: 'Home', img: HomeWebIMG },
            { text: 'LogIn', img: LogInIMG },
            { text: 'Admin', img: AdminIMG },
            { text: 'Add', img: AddIMG },
            { text: 'Updated', img: UpdatedIMG }
          ]}
          icons={[
            {
              obj: (
                <FontAwesomeIcon
                  icon={faHtml5}
                  style={{ color: 'rgb(226,77,44)', marginLeft: '10px' }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            },
            {
              obj: (
                <FontAwesomeIcon
                  icon={faPhp}
                  style={{
                    backgroundColor: 'rgb(85,86,133)',
                    color: 'white',
                    marginLeft: '10px',
                    borderRadius: '10px'
                  }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            },
            {
              obj: (
                <FontAwesomeIcon
                  icon={faJs}
                  style={{ color: 'rgb(246,222,56)', marginLeft: '10px' }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            },
            {
              obj: (
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  style={{ color: 'rgb(16,113,181)', marginLeft: '10px' }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            }
          ]}
        />
        <SoftwareProject
          title="Otter Flight Reservation System"
          tags="Android App"
          contents="App allows customers of an airline company to create accounts and manage reservations. Demonstrated use-case scenarios for both users and administrators to manage SQLite database. Created with Android Studio and applied Java focused design skills"
          images={[
            { text: 'Home', img: HomeAndroidIMG },
            { text: 'Create Account', img: CreateAccountSuccessIMG },
            { text: 'Create Account (fail)', img: CreateAccountFailIMG },
            { text: 'Reserve', img: ReserveIMG },
            { text: 'Cancel Reservation', img: CancelReservationIMG }
          ]}
          icons={[
            {
              obj: (
                <FontAwesomeIcon
                  icon={faAndroid}
                  style={{ color: 'rgb(103,174,74)', marginLeft: '10px' }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            },
            {
              obj: (
                <FontAwesomeIcon
                  icon={faJava}
                  style={{
                    color: 'rgb(84,131,161)',
                    marginLeft: '10px'
                  }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            }
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
          icons={[
            {
              obj: (
                <FontAwesomeIcon
                  icon={faDatabase}
                  style={{
                    color: 'grey',
                    marginLeft: '10px'
                  }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            },
            {
              obj: (
                <FontAwesomeIcon
                  icon={faMicrochip}
                  style={{
                    color: 'rgb(18,77,58)',
                    marginLeft: '10px'
                  }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            },
            {
              obj: (
                <FontAwesomeIcon
                  icon={faRaspberryPi}
                  style={{
                    color: 'rgb(194,30,75)',
                    marginLeft: '10px'
                  }}
                  size={FA_SIZE}
                />
              ),
              type: 'fa'
            }
          ]}
        />
        <Divider variant="middle" style={{ marginTop: 50, marginBottom: 50 }} />
      </div>
    )
  }
}
