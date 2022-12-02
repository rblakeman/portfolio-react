import React, { Component } from 'react';

// IMAGES
import WeatherIMG from '../img/software/react/weather.png';
import YouTubeIMG from '../img/software/react/youtube.png';
//
import HomeWebIMG from '../img/software/web/home.png';
import LogInIMG from '../img/software/web/log_in.png';
import AdminIMG from '../img/software/web/admin.png';
import AddIMG from '../img/software/web/add.png';
import UpdatedIMG from '../img/software/web/updated.png';
//
import HomeAndroidIMG from '../img/software/android/home_screen.png';
import CreateAccountSuccessIMG from '../img/software/android/create_account_success.png';
import CreateAccountFailIMG from '../img/software/android/create_account_fail.png';
import ReserveIMG from '../img/software/android/reserve.png';
import CancelReservationIMG from '../img/software/android/cancel_reservation.png';
//
import TopViewIMG from '../img/software/clamshell/top_view.jpg';
import BottomViewIMG from '../img/software/clamshell/bottom_view.jpg';
import DiagramIMG from '../img/software/clamshell/process_diagram.png';

import Banner from '../components/banner';
import SoftwareProject from '../components/software_project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faJs,
    faHtml5,
    faPhp,
    faCss3Alt,
    faAndroid,
    faJava,
    faRaspberryPi
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import ReduxLogo from '../img/software/react/redux_logo.svg';

const styles = {
    root: {
        // maxWidth: '1125px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        // margin: 'auto'
    }
};

const FA_SIZE = '5x';

export default class Software extends Component {
    render() {
        return (
            <div style={styles.root}>
                <Banner text="Software Projects" />
                <SoftwareProject
                    title="React Apps"
                    tags="ReactJS, Redux, AJAX"
                    contents="Full-Stack projects using various combinations of React, Redux, and AJAX. Some projects are hosted on GitHub Pages, interactive demos to the right."
                    list={[
                        'Weather Forecast App',
                        'YouTube Search and Viewer App',
                        'Searchable Pokedex App',
                        'Color Palette and Photography App',
                        'Tic-Tac-Toe App'
                    ]}
                    images={[
                        { text: 'Weather', img: WeatherIMG, link: 'https://rblakeman.github.io/WeatherMapApp/' },
                        { text: 'YouTube', img: YouTubeIMG, link: 'https://rblakeman.github.io/YouTubeApp/' },
                        { text: 'Pokedex', img: null, link: 'https://rblakeman.github.io/PokedexApp/' },
                        { text: 'Colors', img: null, link: 'https://rblakeman.github.io/ColorApp' },
                        { text: 'TicTacToe', img: null, link: 'https://rblakeman.github.io/TicTacToe' }
                    ]}
                    icons={[
                        {
                            obj: (
                                <FontAwesomeIcon
                                    key='faReact'
                                    icon={faReact}
                                    style={{ color: 'rgb(100,212,242)', marginLeft: '10px' }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        },
                        {
                            obj: (
                                <FontAwesomeIcon
                                    key='faJs'
                                    icon={faJs}
                                    style={{ color: 'rgb(246,222,56)', marginLeft: '10px' }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        },
                        {
                            img: ReduxLogo
                        }
                    ]} />
                <SoftwareProject
                    title="Web Development Catalog"
                    tags="HTML, CSS, PHP, JS, jQuery"
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
                                    key='faHtml5'
                                    icon={faHtml5}
                                    style={{ color: 'rgb(226,77,44)', marginLeft: '10px' }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        },
                        {
                            obj: (
                                <FontAwesomeIcon
                                    key='faPhp'
                                    icon={faPhp}
                                    style={{
                                        backgroundColor: 'rgb(85,86,133)',
                                        color: 'white',
                                        marginLeft: '10px',
                                        borderRadius: '10px'
                                    }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        },
                        {
                            obj: (
                                <FontAwesomeIcon
                                    key='faJs'
                                    icon={faJs}
                                    style={{ color: 'rgb(246,222,56)', marginLeft: '10px' }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        },
                        {
                            obj: (
                                <FontAwesomeIcon
                                    key='faCss3Alt'
                                    icon={faCss3Alt}
                                    style={{ color: 'rgb(16,113,181)', marginLeft: '10px' }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        }
                    ]} />
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
                                    key='faAndroid'
                                    icon={faAndroid}
                                    style={{ color: 'rgb(103,174,74)', marginLeft: '10px' }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        },
                        {
                            obj: (
                                <FontAwesomeIcon
                                    key='faJava'
                                    icon={faJava}
                                    style={{
                                        color: 'rgb(84,131,161)',
                                        marginLeft: '10px'
                                    }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        }
                    ]} />
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
                                    key='faDatabase'
                                    icon={faDatabase}
                                    style={{
                                        color: 'grey',
                                        marginLeft: '10px'
                                    }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        },
                        {
                            obj: (
                                <FontAwesomeIcon
                                    key='faMicrochip'
                                    icon={faMicrochip}
                                    style={{
                                        color: 'rgb(18,77,58)',
                                        marginLeft: '10px'
                                    }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        },
                        {
                            obj: (
                                <FontAwesomeIcon
                                    key='faRaspberryPi'
                                    icon={faRaspberryPi}
                                    style={{
                                        color: 'rgb(194,30,75)',
                                        marginLeft: '10px'
                                    }}
                                    size={FA_SIZE} />
                            ),
                            type: 'fa'
                        }
                    ]} />
            </div>
        );
    }
}
