import React, { Component } from 'react';

import Home from './home';
import Blurb from '../components/blurb';
import Banner from '../components/banner'
import Event from '../components/event';
import Software from './software'
import SoftwareProject from '../components/software_project';
import Games from './games'
import GameProject from '../components/game_project'
import Research from './research'
import Resume from './resume'

import Blurb_CSUMBLogo from '../img/csumb_logo.png';
import Blurb_GRLLogo from '../img/grl_logo.png';
import Blurb_Experience from '../img/experience_pic.png';
import Event_Graduation from '../img/events/graduation2.jpg';
import Event_Capstone from '../img/events/capstone.jpg'

export default class Content extends Component {
    renderPage() {
        const {page} = this.props
        if (page === "home")
        {
            return (
                <div>
                    <Home />
                    <div class="container marketing">
                        <div class="row">
                            <Blurb image={Blurb_CSUMBLogo}
                                title="Education"
                                contents="Bachelor of Science in Computer Science & Information Technology. Graduated Spring 2018 with Honors and an emphasis in Game Development"
                                button_text="CSUMB"
                                button_url="https://csumb.edu/games"/>
                            <Blurb image={Blurb_GRLLogo}
                                title="Game Research Lab"
                                contents="Private lab and workspace for HCI, Robotics, Computer Graphics, and Game research. Annual host of many undergraduate funded research projects and papers."
                                button_text="GRL Site"
                                button_url="http://gameresearchlab.org/" />
                            <Blurb image={Blurb_Experience}
                                title="Experience"
                                contents="Involved and completed many different projects in a variety of different backgrounds, including: Software, Games, and Undergraduate Research."
                                button_text="Resume"
                                button_url="#" />
                        </div>
                        
                        <hr class="featurette-divider" />
                        
                        <Banner title="Events"
                            subtitle="" />
                        <Event title="University Graduation"
                            date="May 2018"
                            contents="Walked across the stage to receive my B.S. along with several colleagues. Best part of the day? Hearing my name pronounced correctly."
                            image={Event_Graduation}
                            orientation="left"/>
                        <hr class="featurette-divider" />
                        <Event title="Senior Capstone"
                            date="May 2018"
                            contents="Presented with my team in front of faculty and visitors. Followed up with a poster session, and a live demo.
                            Learn about the project under the Games tab."
                            image={Event_Capstone}
                            orientation="right"/>
                        <hr class="featurette-divider" />
                    </div>
                </div>
            )
        }
        else if (page === "software")
        {
            return (
                <div>
                    <Banner title="Software"/>
                    <Software />
                    <SoftwareProject />
                </div>
            )
        }
        else if (page === "games")
        {
            return (
                <div>
                    <Banner title="Games"/>
                    <Games />
                    <GameProject />
                </div>
            )
        }
        else if (page === "research")
        {
            return (
                <div>
                    <Banner title="Research"/>
                    <Research />
                </div>
            )
        }
        else if (page === "resume")
        {
            return (
                <div>
                    <Banner title="Resumes"/>
                    <Resume />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <br />
                {this.renderPage()}
            </div>
        )
    }
}