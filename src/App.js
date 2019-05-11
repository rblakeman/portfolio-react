import React, { Component } from 'react'
import { Divider, Tabs, Tab, AppBar } from '@material-ui/core'

import MenuBar from './components/menu_bar'
import NotificationBar from './components/notification_bar'
import Footer from './components/footer'

import Home from './pages/home'
import Events from './pages/events'
import Software from './pages/software'
import Games from './pages/games'
import Research from './pages/research'
import Resume from './pages/resume'

const styles = {
  root: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()

    this.state = {
      currPage: ''
    }
  }

  setPage = (newPage) => {
    this.setState({ currPage: newPage })
    window.scrollTo(0, this.myRef.current.offsetTop)
  }

  renderContentPage() {
    const { currPage } = this.state
    if (currPage === '' || currPage === 'Events') {
      return <Events />
    } else if (currPage === 'Software') {
      return <Software />
    } else if (currPage === 'Games') {
      return <Games />
    } else if (currPage === 'Research') {
      return <Research />
    } else if (currPage === 'Resume') {
      return <Resume />
    }
  }

  render() {
    return (
      <div style={styles.root} className="App">
        <NotificationBar />
        <MenuBar onPageClick={(e, v) => this.setPage(e, v)} />
        <Home />
        <div ref={this.myRef}>
          <Divider variant="middle" style={{ margin: '50px 16px 16px 16px' }} />
        </div>
        <div style={{ margin: 32 }}>
          {/* <AppBar position="sticky" style={{ backgroundColor: '#0275D8' }}>
            <Tabs
              value={this.state.currPage}
              onChange={(ev, value) => {
                this.setState({ currPage: value })
              }}
              variant="fullWidth"
              // indicatorColor="primary"
              // textColor="primary"
              style={{ margin: '0px 50px' }}
            >
              <Tab icon={<Event />} label="Events" value="Events" />
              <Tab icon={<Code />} label="Software" value="Software" />
              <Tab icon={<VideogameAsset />} label="Games" value="Games" />
              <Tab icon={<Edit />} label="Research" value="Research" />
              <Tab icon={<Description />} label="Resume" value="Resume" />
            </Tabs>
          </AppBar> */}
          <div style={styles.pages}>{this.renderContentPage()}</div>
        </div>
        <Divider variant="middle" style={{ marginTop: 50, marginBottom: 50 }} />
        <Footer />
      </div>
    )
  }
}

export default App

/*
App
  <HeaderLinks />
  <MenuBar />
  <NotificationBar />
  <Contents />
    <Home />
      Profile/Info
      <Blurbs />
      <Event />
      ...
    <Software />
      <Banner />
      <SoftwareProject />
      ...
    <Games />
      <Banner />
      <GameProject />
    <Research />
      <Banner />
    <Resume />
      <ResumerViewer />
  <Footer />

*/
