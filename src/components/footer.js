import React from 'react'

import ScrollToTop from 'react-scroll-up'
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded'
const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    margin: 32,
    marginTop: 0,
    padding: 16,
    paddingTop: 0
  }
}

export default (props) => {
  return (
    <div style={styles.footer}>
      <ScrollToTop showUnder={160}>
        <KeyboardArrowUpRounded />
      </ScrollToTop>
      <p style={{ margin: 0 }}>
        &copy; 2018 Ryan Blakeman &middot;
        <a href="mailto:rblakeman31@gmail.com">Email</a> &middot;
        <a href="https://www.linkedin.com/in/rblakeman/">LinkedIn</a>
        <br />
      </p>
    </div>
  )
}
