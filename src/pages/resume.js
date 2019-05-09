import React, { useState } from 'react'
import Banner from '../components/banner'
import { Button, Typography } from '@material-ui/core'
const styles = {
  columns: {
    display: 'flex',
    flexDirection: 'column'
  },
  rows: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    textAlign: 'center',
    padding: '50px',
    color: '#5a5a5a',
    fontWeight: 400
  },
  highlightedButton: {
    backgroundColor: '#0275d8',
    color: '#FFFFFF',
    boxShadow: 'none'
  },
  leftToggle: {
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    textTransform: 'none'
  },
  rightToggle: {
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    textTransform: 'none'
  },
  frame: {
    width: '80%',
    padding: '20px'
  }
}

const gameResumeURL =
  'https://drive.google.com/file/d/144XS1ex37gSW3SJ-7FPD1XlWZ-oBRCcW/preview'
const softwareResumeURL =
  'https://drive.google.com/file/d/1lGmm72pw18xBkF5BZ1tDzC5WI5kLVihm/preview'

export default (props) => {
  const [gameResume, setGameResume] = useState(true)

  return (
    <div>
      <Banner text="Resume" />
      <div style={{ ...styles.columns, alignItems: 'center' }}>
        {/* <div style={styles.title}>
          <Typography variant="h2">Resumes</Typography>
        </div> */}
        <div style={{ ...styles.rows, paddingBottom: '20px' }}>
          <Button
            variant="contained"
            style={
              gameResume
                ? { ...styles.leftToggle, ...styles.highlightedButton }
                : styles.leftToggle
            }
            onClick={() => setGameResume(true)}
          >
            Game Resume
          </Button>
          <Button
            variant="contained"
            style={
              !gameResume
                ? { ...styles.rightToggle, ...styles.highlightedButton }
                : styles.rightToggle
            }
            onClick={() => setGameResume(false)}
          >
            Software Resume
          </Button>
        </div>
        <div style={styles.frame}>
          <iframe
            title={gameResume ? 'Game Resume' : 'Software Resume'}
            src={gameResume ? gameResumeURL : softwareResumeURL}
            width="100%"
            height="920"
          />
        </div>
      </div>
    </div>
  )
}
