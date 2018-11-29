import React, { Component } from 'react';

import ProfilePic from '../img/profile_pic.jpg';

export default class Home extends Component {
    render() {
        return (
            <div class="container marketing">
                <br />
                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">Ryan Blakeman
                            <div class="text-muted">Game Developer | <br />Software Engineer | <br />Full-Stack Developer</div>
                        </h2>
                        <br />
                        <p class="lead">
                            I am a recent CSUMB graduate, where I received my B.S. in Computer Science.
                            In my time at school I focused on Game Development while also co-developing my Software Engineering and Web Development skills.
                            I have an abundance of projects with a cumulative research project.
                            
                        </p>
                        <a href="https://www.github.com/rblakeman/" class="fab fa-github"></a>
                        <a href="https://www.linkedin.com/in/rblakeman/" class="fab fa-linkedin"></a>
                    </div>
                    <div class="col-md-5">
                        <img class="featurette-image img-fluid mx-auto" src={ProfilePic} alt="Profile Picture" />
                    </div>
                </div>
                <br />
            </div>
        )
    }
}