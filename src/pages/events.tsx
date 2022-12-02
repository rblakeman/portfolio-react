import React, { Component } from 'react';

// IMAGES
import Event_GDC17 from '../img/events/gdc_2017.jpg';
import Event_GameJam from '../img/events/gamejam_2017.jpg';
import Event_UROC from '../img/events/uroc_symposium_2017.jpg';
import Event_GDC18 from '../img/events/gdc_2018.jpeg';
import Event_Capstone from '../img/events/capstone.jpg';
import Event_Graduation from '../img/events/graduation.jpg';
import Event_GDC19 from '../img/events/gdc_2019.jpg';

import Banner from '../components/banner';
import Event from '../components/event';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-brands-svg-icons';
// import {} from '@fortawesome/free-solid-svg-icons';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
};

const FA_SIZE = '5x';
const ICON_SIZE = '80px';

export default class Events extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Banner text="Events" />
                <Event
                    title="GDC 2019"
                    date="March 2019"
                    contents="Attended GDC for two days to listen and learn at sessions, walk and talk in the expo, but most importantly laugh and play some unique and inspiring games. My colleague captured this very candid shot of me in between the new technology booths."
                    image={Event_GDC19}
                    orientation="flipped" />
                <Event
                    title="University Graduation"
                    date="May 2018"
                    contents="Walked across the stage to receive my B.S. along with several colleagues. Best part of the day? Hearing my name pronounced correctly."
                    image={Event_Graduation} />
                <Event
                    title="Senior Capstone"
                    date="May 2018"
                    contents="Presented with my team in front of faculty and visitors. Followed up with a poster session, and a live demo.
                            Learn about the project under the Games tab."
                    image={Event_Capstone}
                    orientation="flipped" />
                <Event
                    title="GDC 2018"
                    date="March 2018"
                    contents="Returned back a second year using the Student Expo Pass."
                    image={Event_GDC18} />
                <Event
                    title="UROC Summer Research Symposium 2017"
                    date="August 2017"
                    contents="We presented our final research during UROC's Summer Research Symposium in the Tanimura & Antle Library. Check out my Research tab for more info and the poster."
                    image={Event_UROC}
                    orientation="flipped" />
                <Event
                    title="GameJam 2017"
                    date="June 2017"
                    contents="Set up and assisted Dr. Krzysztof Pietroszek with the Summer GameJam in the Joel & Dena Gambord BIT Building."
                    image={Event_GameJam} />
                <Event
                    title="GDC 2017"
                    date="March 2017"
                    contents="Visited the Game Developers Conference this year thanks to the student Expo Pass."
                    image={Event_GDC17}
                    orientation="flipped" />
            </div>
        );
    }
}
