import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Typography } from '@material-ui/core';

import Blurb from '../components/blurb';

import ProfilePic from '../img/profile_pic.jpeg';
import Blurb_CSUMBLogo from '../img/csumb_logo.png';
import Blurb_GRLLogo from '../img/grl_logo.png';
import Blurb_Experience from '../img/experience_pic.png';

const MIN_DESKTOP_WIDTH = 830;

const styles = {
    root: {
        maxWidth: '1250px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto' //'32px'
        // < 875px width = stacked
    } as React.CSSProperties,
    intro: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '32px'
    } as React.CSSProperties,
    header: {
        order: 1,
        flexGrow: 2,
        marginRight: '15px'
    } as React.CSSProperties,
    name: {
        fontSize: '50px',
        color: '#5a5a5a',
        fontWeight: 400,
        lineHeight: 1,
        marginBottom: '15px'
    } as React.CSSProperties,
    titles: {
        fontSize: '38px',
        color: '#6c757d',
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: '-0.05rem',
        marginTop: '15px'
    } as React.CSSProperties,
    description: {
        fontSize: '1.25rem',
        color: '#5a5a5a',
        fontWeight: 300,
        lineHeight: 1.5,
        padding: '30px 0px'
    } as React.CSSProperties,
    smallName: {
        fontSize: '38px',
        color: '#5a5a5a',
        fontWeight: 400,
        lineHeight: 1,
        marginBottom: '15px'
    } as React.CSSProperties,
    smallTitles: {
        fontSize: '28px',
        color: '#6c757d',
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: '-0.05rem',
        marginTop: '15px'
    } as React.CSSProperties,
    smallDescription: {
        fontSize: '1rem',
        color: '#5a5a5a',
        fontWeight: 300,
        lineHeight: 1.5,
        padding: '30px 0px'
    } as React.CSSProperties,
    icons: {
        fontSize: '3em'
    } as React.CSSProperties,
    profilePic: {
        order: 2,
        flexGrow: 1,
        marginLeft: '15px'
    } as React.CSSProperties,
    blurbs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    } as React.CSSProperties
};

type Props = { };
export default function Home (props: Props) {
    const [width, setWidth] = useState(0);
    // const [height, setHeight] = useState(0);

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions);

        // componentWillUnmount
        return function cleanup() {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    });

    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
        // setHeight(window.innerHeight);
    };

    return (
        <div style={styles.root}>
            <div
                style={
                    width >= MIN_DESKTOP_WIDTH
                        ? styles.intro
                        : {
                            ...styles.intro,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }
                }>
                <div style={styles.header}>
                    <Typography variant="h2" style={width >= MIN_DESKTOP_WIDTH ? styles.name : styles.smallName}>
                        Ryan Blakeman
                    </Typography>
                    <Typography variant="h2" style={width >= MIN_DESKTOP_WIDTH ? styles.titles : styles.smallTitles}>
                        <div>Software Engineer</div>
                        <div>Front-End UI Developer</div>
                        <div>Game Developer</div>
                    </Typography>
                    {width < MIN_DESKTOP_WIDTH ? (
                        <div style={styles.profilePic}>
                            <img
                                style={{
                                    borderRadius: '10px',
                                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 4px',
                                    maxWidth: '300px'
                                }}
                                src={ProfilePic}
                                alt="Profile Pict" />
                        </div>
                    ) : null}
                    <Typography style={width >= MIN_DESKTOP_WIDTH ? styles.description : styles.smallDescription}>
                        I am currently a UI Software Engineer at Tenable, working on the Design
                        Engineering team. The main focus for our team is to bridge the gap between
                        Design and Engineering. We are responsible for creating the Portfolio
                        Design System, a library of theming tokens and framework agnostic
                        web-components designed for use in all Tenable products, regardless of tech-stack.
                        <br />
                        <br />
                        My responsibilities include component creation, meetings with the Design &
                        UX team, collaborating on issues with my teammates, and providing guidance
                        for our feature teams adopting the design-system into their product.
                        <br />
                        <br />
                        Prior to this, my team initially started as the UI Platform team,
                        where we maintained and enhanced the monolithic Tenable IO platform and
                        assisted its suite of product teams. This includes expanding on its own
                        internal design system, alongside other theming tools and frameworks to
                        ensure cross-app consistency. We also worked closely with the T.io Dashboards
                        and Reporting team to integrate an API focused reusable visualization framework.

                        {/* I was previously a Software Engineer at Robin Care Inc. My
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
                        functional bugs throughout the platform. */}

                        {/* Last spring I graduated from CSUMB where I received my B.S. in
                        Computer Science. In my time at school I focused on Game
                        Development while also co-developing my Software Engineering and
                        Web Development skills. I have an abundance of projects with a
                        cumulative research project. */}
                    </Typography>
                    <Typography style={styles.icons}>
                        <a
                            style={{ marginLeft: 10 }}
                            href="https://github.com/rblakeman"
                            target="_blank">
                            <FontAwesomeIcon style={{ color: 'black' }} icon={faGithub} />
                        </a>
                        <a
                            style={{ marginLeft: 10 }}
                            href="https://gitlab.com/rblakeman"
                            target="_blank">
                            <FontAwesomeIcon style={{ color: 'darkorange' }} icon={faGitlab} />
                        </a>
                        <a
                            style={{ marginLeft: 10 }}
                            href="https://www.linkedin.com/in/rblakeman/"
                            target="_blank">
                            <FontAwesomeIcon
                                style={{ color: '#007bb5' }}
                                icon={faLinkedin} />
                        </a>
                    </Typography>
                </div>
                {width >= MIN_DESKTOP_WIDTH ? (
                    <div style={styles.profilePic}>
                        <img
                            style={{
                                borderRadius: '10px',
                                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 4px',
                                maxWidth: '450px'
                            }}
                            src={ProfilePic}
                            alt="Profile Pict" />
                    </div>
                ) : null}
            </div>
            <div
                style={
                    width >= MIN_DESKTOP_WIDTH
                        ? styles.blurbs
                        : {
                            ...styles.blurbs,
                            flexDirection: 'column',
                            alignItems: 'center'
                        }
                }>
                <Blurb
                    image={Blurb_CSUMBLogo}
                    circle={true}
                    title="Education"
                    contents="Bachelor of Science in Computer Science. Graduated Spring 2018 with Honors and an emphasis in Game Development and Software Engineering"
                    button_text="CSUMB"
                    button_url="https://studentgames.itch.io/" />
                <Blurb
                    image={Blurb_Experience}
                    circle={true}
                    title="Experience"
                    contents="Involved and completed many different projects in a variety of different backgrounds, including: Software, Games, and Undergraduate Research."
                    button_text="Resume"
                    button_url="https://drive.google.com/file/d/1lGmm72pw18xBkF5BZ1tDzC5WI5kLVihm/view" />
                <Blurb
                    image={Blurb_GRLLogo}
                    circle={false}
                    title="Game Research Lab"
                    contents="Private lab and workspace for HCI, Robotics, Computer Graphics, and Game research. Annual host of many undergraduate funded research projects and papers."
                    button_text="Research"
                    // button_url="http://gameresearchlab.org/"
                    button_url="https://www.pietroszek.com/research/" />
            </div>
        </div>
    );
}
