import React from 'react';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

export default(props) => {
    return (
        <div>
            <footer class="container">
                <p class="float-right">
                    <ScrollUpButton />{/*<a href="#">Back to top</a>*/}
                </p>
                <p>&copy; 2018 Ryan Blakeman &middot;
                    <a href="mailto:rblakeman31@gmail.com">Email</a> &middot;
                    <a href="https://www.linkedin.com/in/rblakeman/">LinkedIn</a>
                <br />Style by Bootstrap
                </p>
            </footer>
        </div>
    )
}