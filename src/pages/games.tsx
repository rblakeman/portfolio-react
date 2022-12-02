import React, { Component } from 'react';

// IMAGES
import moliIMG from '../img/games/open-ocean-vr/Moli_Hello_jellygif.gif';
import oceanposterIMG from '../img/games/open-ocean-vr/OpenOceanVRPosterFinal.png';
//
import correctmoveIMG from '../img/games/royal-game-of-ur/correct_move.png';
import invalidmoveIMG from '../img/games/royal-game-of-ur/invalid_move.png';
//
import phoenixIMG from '../img/games/enkindle/phoenix_screenshot.png';
import enkindlescreenshotIMG from '../img/games/enkindle/unity_screenshot.png';
//
import chessstartIMG from '../img/games/chess/chess_start.png';
import chessmiddleIMG from '../img/games/chess/chess_middle.png';
import chessgameoverIMG from '../img/games/chess/chess_gameover.png';

import Banner from '../components/banner';
import GameProject from '../components/game_project';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-brands-svg-icons';
// import {} from '@fortawesome/free-solid-svg-icons';

const styles = {
    root: {
        // maxWidth: '1125px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    } as React.CSSProperties
};

const FA_SIZE = '5x';
const ICON_SIZE = '80px';

export default class Games extends Component {
    render() {
        return (
            <div style={styles.root}>
                <Banner text="Game Projects" />
                <GameProject
                    title="Open Ocean VR"
                    tags="Virtual Reality Interactive Experience"
                    contents="Capstone Project and Presentation for Senior Semester at University. Virtual Reality game designed for Oculus Rift using Unity3D Game Engine and C#. Player assumes role of deep-sea diver to interact and learn about the aquatic life around them. Created Dynamic Event system to allow Game Designers to create quests using an intuitive interface."
                    externalLink={[
                        {
                            url: 'https://www.youtube.com/watch?v=t73Ghh6quj8',
                            text: 'You can watch my Capstone presentation here'
                        }
                    ]}
                    images={[
                        { text: 'Mola Mola', img: moliIMG },
                        { text: 'Poster', img: oceanposterIMG }
                    ]} />
                <GameProject
                    title="Royal Game of Ur"
                    tags="Mixed Reality Video Game"
                    contents="Human-Computer Interaction Research Project under Mentor Dr. Krzysztof Pietroszek. Mixed-Reality interaction using a 3D spatial hand-tracking Leap sensor mounted on HMD. Implemented a solution in Unity3D to allow player to use their hands to move pieces and play against competitor. AI opponent powered by a Min-Max Decision Tree and animated using Inverse Kinematics."
                    externalLink={[
                        {
                            url: 'https://www.youtube.com/watch?v=0i5dbWtMu_Y',
                            text: 'Here is a short gameplay video'
                        }
                    ]}
                    images={[
                        { text: 'Invalid Move', img: invalidmoveIMG },
                        { text: 'Correct Move', img: correctmoveIMG }
                    ]} />
                <GameProject
                    title="Enkindle"
                    tags="3D Video Game"
                    contents="Developed and published game to simulate an industry Game Studio environment and workflow. Collaborated with Game Design program and Polish Art University to manage and visualize gameplay. Implemented mesh deformation as a tool for Unity’s built-in Terrain system. Along with a procedural generation system for creating trees and placing them in game. No two playthoughs are alike!"
                    externalLink={[
                        {
                            url: 'https://studentgames.itch.io/enkindle',
                            text: 'Check out the itch.io page'
                        }
                    ]}
                    images={[
                        { text: 'Enkindle', img: phoenixIMG },
                        { text: 'Unity', img: enkindlescreenshotIMG }
                    ]} />
                <GameProject
                    title="Chess"
                    tags="C++ Console Window"
                    contents="Original Chess game written in C++ using the console window for input/output. First programming project for a lower level University class. Although this focused more on software basics, it kickstarted my passion for game programming."
                    images={[
                        { text: 'Start', img: chessstartIMG },
                        { text: 'During', img: chessmiddleIMG },
                        { text: 'Game Over', img: chessgameoverIMG }
                    ]}
                    imageSize="300px" />
            </div>
        );
    }
}
