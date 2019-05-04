import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import MenuBar from './components/menu_bar'
import NotificationBar from './components/notification_bar'
import Footer from './components/footer'

import Home from './pages/home'
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
  render() {
    return (
      <Router style={styles.root} className="App">
        <div>
          <NotificationBar />
          <MenuBar />
          <Route path="/portfolio-react" exact component={Home} />
          <Route path="/portfolio-react/home" component={Home} />
          <Route path="/portfolio-react/software" component={Software} />
          <Route path="/portfolio-react/games" component={Games} />
          <Route path="/portfolio-react/research" component={Research} />
          <Route path="/portfolio-react/resume" component={Resume} />
          <Footer />
        </div>
      </Router>
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
