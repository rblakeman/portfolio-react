import React, { Component } from 'react'

import MenuBar from './components/menu_bar'
import NotificationBar from './components/notification_bar'
import Footer from './components/footer'
import Home from './pages/home'
const styles = {
  root: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.root} className="App">
        <NotificationBar />
        <MenuBar />
        <Home />
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
