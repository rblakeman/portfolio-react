import React, { Component } from 'react';
import { AppBar, MenuItem, Typography } from '@material-ui/core';
import {
    Event,
    Code,
    VideogameAsset,
    Edit,
    Description
} from '@material-ui/icons';
const styles = {
    appBar: {
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#343a40',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '46px',
        padding: '0px 20px'
    },
    left: {
        display: 'flex',
        flexDirection: 'row'
    },
    linkText: { color: '#ddd', textDecoration: 'none' },
    nameText: { color: '#fff', textDecoration: 'none', fontSize: 'larger' },
    icons: { paddingRight: '5px' }
};

export default class MenuBar extends Component {
    constructor(props) {
        super(props);

        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <AppBar style={styles.appBar}>
                {/* <div style={styles.left}> */}
                {/* <MenuItem style={styles.nameText}>Ryan Blakeman</MenuItem> */}
                <MenuItem
                    onClick={() => this.props.onPageClick('Events')}
                    style={styles.linkText}>
                    <Event style={styles.icons} />
                    {this.state.width >= 560 ? 'Events' : null}
                </MenuItem>
                <MenuItem
                    onClick={() => this.props.onPageClick('Software')}
                    style={styles.linkText}>
                    <Code style={styles.icons} />
                    {this.state.width >= 560 ? 'Software' : null}
                </MenuItem>
                <MenuItem
                    onClick={() => this.props.onPageClick('Games')}
                    style={styles.linkText}>
                    <VideogameAsset style={styles.icons} />
                    {this.state.width >= 560 ? 'Games' : null}
                </MenuItem>
                <MenuItem
                    onClick={() => this.props.onPageClick('Research')}
                    style={styles.linkText}>
                    <Edit style={styles.icons} />
                    {this.state.width >= 560 ? 'Research' : null}
                </MenuItem>
                {/* </div> */}
                <MenuItem
                    onClick={() => this.props.onPageClick('Resume')}
                    style={styles.linkText}>
                    <Description style={styles.icons} />
                    {this.state.width >= 560 ? 'Resume' : null}
                </MenuItem>
            </AppBar>
        );
    }
}
