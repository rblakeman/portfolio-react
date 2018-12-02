import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import MenuBar from './components/menu_bar'
import NotificationBar from './components/notification_bar'
import Footer from './components/footer'

import Home from './containers/home'
import Software from './containers/software'
import Games from './containers/games'
import Research from './containers/research'
import Resume from './containers/resume'

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
          <Route path="/" exact component={Home} />
          <Route path="/software/" component={Software} />
          <Route path="/games/" component={Games} />
          <Route path="/research/" component={Research} />
          <Route path="/resume/" component={Resume} />
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
