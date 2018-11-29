import React, { Component } from 'react';

import HeaderLinks from './components/header'
import MenuBar from './components/menu_bar';
import NotificationBar from './components/notification_bar';
import Footer from './components/footer';
import Content from './containers/content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderLinks />
        <body>
          <main role="main">
            <NotificationBar />
            <MenuBar />
            <Content page="home"/>
            <Footer />
          </main>
        </body>
      </div>
    );
  }
}

export default App;


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