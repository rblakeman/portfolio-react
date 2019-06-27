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
  constructor(props) {
    super(props)

    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    return (
      <div style={styles.root}>
        <div
          style={
            this.state.width >= 830
              ? styles.intro
              : {
                  ...styles.intro,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-evenly'
                }
          }
        >
          <div style={styles.header}>
            <Typography variant="h2" style={styles.name}>
              Ryan Blakeman
            </Typography>
            <Typography variant="h2" style={styles.titles}>
              <div>Software Engineer</div>
              <div>Full Stack Developer</div>
              <div>Game Developer</div>
            </Typography>
            {this.state.width < 830 ? (
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
            ) : null}
            <Typography style={styles.description}>
              I was previously a Software Engineer at Robin Care Inc. My
              achievements include a newly designed customizable
              Patient-Onboarding registration flow and an intelligent Patient
              Symptom Tracking feature.
              <br />
              My daily responsibilities included meetings with the product and
              design team, collaborating on issues with the other engineers, and
              discussing feedback from our service team and their patients.
              <br />
              My workflow involved implementing new designs for our client
              facing and administrative web apps, and tackling styling and
              functional bugs throughout the platform.
              {/* Last spring I graduated from CSUMB where I received my B.S. in
              Computer Science. In my time at school I focused on Game
              Development while also co-developing my Software Engineering and
              Web Development skills. I have an abundance of projects with a
              cumulative research project. */}
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
          {this.state.width >= 830 ? (
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
          ) : null}
        </div>
        <div
          style={
            this.state.width >= 830
              ? styles.blurbs
              : {
                  ...styles.blurbs,
                  flexDirection: 'column',
                  alignItems: 'center'
                }
          }
        >
          <Blurb
            image={Blurb_CSUMBLogo}
            circle={true}
            title="Education"
            contents="Bachelor of Science in Computer Science. Graduated Spring 2018 with Honors and an emphasis in Game Development and Software Engineering"
            button_text="CSUMB"
            button_url="https://studentgames.itch.io/"
          />
          <Blurb
            image={Blurb_GRLLogo}
            circle={false}
            title="Game Research Lab"
            contents="Private lab and workspace for HCI, Robotics, Computer Graphics, and Game research. Annual host of many undergraduate funded research projects and papers."
            button_text="Research"
            // button_url="http://gameresearchlab.org/"
            button_url="https://www.pietroszek.com/research/"
          />
          <Blurb
            image={Blurb_Experience}
            circle={true}
            title="Experience"
            contents="Involved and completed many different projects in a variety of different backgrounds, including: Software, Games, and Undergraduate Research."
            button_text="Resume"
            button_url="https://drive.google.com/file/d/1lGmm72pw18xBkF5BZ1tDzC5WI5kLVihm/view"
          />
        </div>
      </div>
    )
  }
}
