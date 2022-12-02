import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
const styles = {
    container: {
        maxWidth: '1000px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '16px',
        padding: '16px',
        backgroundColor: '#f7fafd'
    },
    text: {
        margin: '15px',
        maxWidth: '500px'
    },
    title: {
        fontSize: '50px',
        color: '#5a5a5a',
        fontWeight: 400,
        lineHeight: 1,
        marginBottom: '15px'
    },
    date: {
        fontSize: '38px',
        color: '#6c757d',
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: '-0.05rem',
        margin: '15px 0px 20px 0px'
    },
    description: {
        fontSize: '1.25rem',
        color: '#5a5a5a',
        fontWeight: 300,
        lineHeight: 1.5,
        marginTop: '10px'
    },
    picture: {
        margin: '0px 15px'
    }
};
const MIN_WIDTH = 850;

export default class Event extends Component {
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

    renderText() {
        return (
            <div style={styles.text}>
                <div style={styles.title}>{this.props.title}</div>
                <div style={styles.date}>{this.props.date}</div>
                <div style={styles.description}>{this.props.contents}</div>
            </div>
        );
    }

    renderPicture() {
        return (
            <div style={styles.picture}>
                <img
                    style={{
                        borderRadius: '5px',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 5px 1px'
                    }}
                    src={this.props.image}
                    alt="Event" />
            </div>
        );
    }

    render() {
        if (this.state.width > MIN_WIDTH) {
            return (
                <Paper style={styles.container}>
                    {this.props.orientation === 'flipped'
                        ? this.renderPicture()
                        : this.renderText()}
                    {this.props.orientation === 'flipped'
                        ? this.renderText()
                        : this.renderPicture()}
                </Paper>
            );
        } else {
            return (
                <Paper style={{ ...styles.container, flexDirection: 'column', width: '' }}>
                    {this.renderText()}
                    {this.renderPicture()}
                </Paper>
            );
        }
    }
}
