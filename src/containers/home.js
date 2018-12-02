import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import Blurb from '../components/blurb'
import Banner from '../components/banner'
import Event from '../components/event'

import ProfilePic from '../img/profile_pic.jpg'
import Blurb_CSUMBLogo from '../img/csumb_logo.png'
import Blurb_GRLLogo from '../img/grl_logo.png'
import Blurb_Experience from '../img/experience_pic.png'
import Event_Graduation from '../img/events/graduation.jpg'
import Event_Capstone from '../img/events/capstone.jpg'
import Event_GDC18 from '../img/events/gdc_2018.jpeg'
import Event_UROC from '../img/events/uroc_symposium_2017.jpg'
import Event_GameJam from '../img/events/gamejam_2017.jpg'
import Event_GDC17 from '../img/events/gdc_2017.jpg'
const styles = {
  root: {
    margin: 32
  },
  intro: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    marginBottom: 32
  },
  header: {
    order: 1,
    flexGrow: 2,
    marginRight: 15
  },
  name: {
    fontSize: '50px',
    color: '#5a5a5a',
    fontWeight: 400,
    lineHeight: 1,
    marginBottom: 15
  },
  titles: {
    fontSize: '38px',
    color: '#6c757d',
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '-0.05rem',
    marginTop: 15
  },
  description: {
    fontSize: '1.25rem',
    color: '#5a5a5a',
    fontWeight: 300,
    lineHeight: 1.5
  },
  icons: {
    fontSize: '3em'
  },
  profilePic: {
    order: 2,
    flexGrow: 1,
    marginLeft: 15
  },
  blurbs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  events: {
    padding: 16
  }
}

export default class Home extends Component {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.intro}>
          <div style={styles.header}>
            <h2 style={styles.name}>Ryan Blakeman</h2>
            <h2 style={styles.titles}>
              Game Developer | <br /> Software Engineer | <br /> Full Stack
              Developer
            </h2>
            <p style={styles.description}>
              I am a recent CSUMB graduate, where I received my B.S. in Computer
              Science. In my time at school I focused on Game Development while
              also co-developing my Software Engineering and Web Development
              skills. I have an abundance of projects with a cumulative research
              project.
            </p>
            <p style={styles.icons}>
              <a style={{ marginLeft: 10 }} href="https://github.com/rblakeman">
                <FontAwesomeIcon style={{ color: 'black' }} icon={faGithub} />
              </a>
              <a
                style={{ marginLeft: 10 }}
                href="https://www.linkedin.com/in/rblakeman/"
              >
                <FontAwesomeIcon
                  style={{ color: '#007bb5' }}
                  icon={faLinkedin}
                />
              </a>
            </p>
          </div>
          <div style={styles.profilePic}>
            <img src={ProfilePic} alt="Profile Picture" />
          </div>
        </div>
        <div style={styles.blurbs}>
          <div>
            <Blurb
              image={Blurb_CSUMBLogo}
              circle={true}
              title="Education"
              contents="Bachelor of Science in Computer Science & Information Technology. Graduated Spring 2018 with Honors and an emphasis in Game Development"
              button_text="CSUMB"
              button_url="https://csumb.edu/games"
            />
          </div>
          <div>
            <Blurb
              image={Blurb_GRLLogo}
              circle={false}
              title="Game Research Lab"
              contents="Private lab and workspace for HCI, Robotics, Computer Graphics, and Game research. Annual host of many undergraduate funded research projects and papers."
              button_text="GRL Site"
              button_url="http://gameresearchlab.org/"
            />
          </div>
          <div>
            <Blurb
              image={Blurb_Experience}
              circle={true}
              title="Experience"
              contents="Involved and completed many different projects in a variety of different backgrounds, including: Software, Games, and Undergraduate Research."
              button_text="Resume"
              button_url="#"
            />
          </div>
        </div>
        <div style={styles.events}>
          <Divider
            variant="middle"
            style={{ marginTop: 50, marginBottom: 50 }}
          />
          <Banner text="Events" />
          <Event
            title="University Graduation"
            date="May 2018"
            contents="Walked across the stage to receive my B.S. along with several colleagues. Best part of the day? Hearing my name pronounced correctly."
            image={Event_Graduation}
          />
          {/* <Divider
            variant="middle"
            style={{ marginTop: 50, marginBottom: 50 }}
          /> */}
          <Event
            title="Senior Capstone"
            date="May 2018"
            contents="Presented with my team in front of faculty and visitors. Followed up with a poster session, and a live demo.
                Learn about the project under the Games tab."
            image={Event_Capstone}
            orientation="flipped"
          />
          <Event
            title="GDC 2018"
            date="March 2018"
            contents="Returned back a second year using the Student Expo Pass."
            image={Event_GDC18}
          />
          <Event
            title="UROC Summer Research Symposium 2017"
            date="August 2017"
            contents="We presented our final research during UROC's Summer Research Symposium in the Tanimura & Antle Library. Check out my Research tab for more info and the poster."
            image={Event_UROC}
            orientation="flipped"
          />
          <Event
            title="GameJam 2017"
            date="June 2017"
            contents="Set up and assisted Dr. Krzysztof Pietroszek with the Summer GameJam in the Joel & Dena Gambord BIT Building."
            image={Event_GameJam}
          />
          <Event
            title="GDC 2017"
            date="March 2017"
            contents="Visited the Game Developers Conference this year thanks to the student Expo Pass."
            image={Event_GDC17}
            orientation="flipped"
          />
        </div>
        <Divider variant="middle" style={{ marginTop: 50, marginBottom: 50 }} />
      </div>
    )
  }
}
