import React, { Component } from 'react';
import { Paper, Button, Typography } from '@material-ui/core';

// IMAGES
import marbleIMG from '../img/research/marble1.png';
import voxelIMG from '../img/research/marble1voxel.png';
//
import urocposter2016IMG from '../img/research/UROC_Poster_2016.png';
import urocposter2017IMG from '../img/research/UROC_Poster_2017.png';

import Banner from '../components/banner';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-brands-svg-icons';
// import {} from '@fortawesome/free-solid-svg-icons';

const styles = {
    root: {
        // maxWidth: '1125px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    container: {
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        margin: '16px',
        padding: '16px',
        backgroundColor: '#f7fafd'
    },
    top: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '10px',
        alignItems: 'center'
    },
    title: {
        margin: '0px 30px'
    },
    button: {
        margin: '0px 20px',
        textTransform: 'none'
    },
    bottom: {
        maxWidth: '100%',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 4px'
    }
};

const FA_SIZE = '5x';
const ICON_SIZE = '80px';

export default class Research extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: marbleIMG,
            poster: urocposter2017IMG
        };
    }
    render() {
        return (
            <div style={styles.root}>
                <Banner text="Research" />
                <Paper style={styles.container}>
                    <div style={styles.top}>
                        <Typography variant="h5" style={styles.title}>
                            Stone Marble Sponza Scene
                        </Typography>
                        <div>
                            <Button
                                onClick={() => {
                                    this.setState({ image: marbleIMG });
                                }}
                                style={styles.button}>
                                Texture
                            </Button>
                            <Button
                                onClick={() => {
                                    this.setState({ image: voxelIMG });
                                }}
                                style={styles.button}>
                                Voxel
                            </Button>
                        </div>
                    </div>
                    <img style={styles.bottom} src={this.state.image} />
                </Paper>
                <Paper style={styles.container}>
                    <div style={styles.top}>
                        <Typography variant="h5" style={styles.title}>
                            Research Posters
                        </Typography>
                        <div>
                            <Button
                                onClick={() => {
                                    this.setState({ poster: urocposter2017IMG });
                                }}
                                style={styles.button}>
                                2017
                            </Button>
                            <Button
                                onClick={() => {
                                    this.setState({ poster: urocposter2016IMG });
                                }}
                                style={styles.button}>
                                2016
                            </Button>
                        </div>
                    </div>
                    <img style={styles.bottom} src={this.state.poster} />
                </Paper>
            </div>
        );
    }
}
