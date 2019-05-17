import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import { BarLoader } from 'react-spinners'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import Blurb from '../components/blurb'

import ProfilePic from '../img/profile_pic.jpg'
import Blurb_CSUMBLogo from '../img/csumb_logo.png'
import Blurb_GRLLogo from '../img/grl_logo.png'
import Blurb_Experience from '../img/experience_pic.png'

import { Typography } from '@material-ui/core'
const styles = {
  root: {
    maxWidth: '1250px',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto' //'32px'
    // < 875px width = stacked
  },
  intro: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '32px'
  },
  header: {
    order: 1,
    flexGrow: 2,
    marginRight: '15px'
  },
  name: {
    fontSize: '50px',
    color: '#5a5a5a',
    fontWeight: 400,
    lineHeight: 1,
    marginBottom: '15px'
  },
  titles: {
    fontSize: '38px',
    color: '#6c757d',
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '-0.05rem',
    marginTop: '15px'
  },
  description: {
    fontSize: '1.25rem',
    color: '#5a5a5a',
    fontWeight: 300,
    lineHeight: 1.5,
    padding: '30px 0px'
  },
  icons: {
    fontSize: '3em'
  },
  profilePic: {
    order: 2,
    flexGrow: 1,
    marginLeft: '15px'
  },
  blurbs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
}

export default class Home extends Component {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.intro}>
          <div style={styles.header}>
            <Typography variant="h2" style={styles.name}>
              Ryan Blakeman
            </Typography>
            <Typography variant="h2" style={styles.titles}>
              <div>Game Developer</div>
              <div>Software Engineer</div>
              <div>Full Stack Developer</div>
            </Typography>
            <Typography style={styles.description}>
              I am a Software Engineer at Robin Care Inc. Last spring I
              graduated from CSUMB where I received my B.S. in Computer Science.
              In my time at school I focused on Game Development while also
              co-developing my Software Engineering and Web Development skills.
              I have an abundance of projects with a cumulative research
              project.
            </Typography>
            <Typography style={styles.icons}>
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
            </Typography>
          </div>
          <div style={styles.profilePic}>
            <img
              style={{
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 4px'
              }}
              src={ProfilePic}
              alt="Profile Pict"
            />
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
              button_url="https://studentgames.itch.io/"
            />
          </div>
          <div>
            <Blurb
              image={Blurb_GRLLogo}
              circle={false}
              title="Game Research Lab"
              contents="Private lab and workspace for HCI, Robotics, Computer Graphics, and Game research. Annual host of many undergraduate funded research projects and papers."
              button_text="Research"
              // button_url="http://gameresearchlab.org/"
              button_url="https://www.pietroszek.com/research/"
            />
          </div>
          <div>
            <Blurb
              image={Blurb_Experience}
              circle={true}
              title="Experience"
              contents="Involved and completed many different projects in a variety of different backgrounds, including: Software, Games, and Undergraduate Research."
              button_text="Resume"
              button_url="/resume"
            />
          </div>
        </div>
      </div>
    )
  }
}
