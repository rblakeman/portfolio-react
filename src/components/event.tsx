import React, { useState, useEffect } from 'react';
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
    } as React.CSSProperties,
    text: {
        margin: '15px',
        maxWidth: '500px'
    } as React.CSSProperties,
    title: {
        fontSize: '50px',
        color: '#5a5a5a',
        fontWeight: 400,
        lineHeight: 1,
        marginBottom: '15px'
    } as React.CSSProperties,
    date: {
        fontSize: '38px',
        color: '#6c757d',
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: '-0.05rem',
        margin: '15px 0px 20px 0px'
    } as React.CSSProperties,
    description: {
        fontSize: '1.25rem',
        color: '#5a5a5a',
        fontWeight: 300,
        lineHeight: 1.5,
        marginTop: '10px'
    } as React.CSSProperties,
    picture: {
        margin: '0px 15px'
    } as React.CSSProperties
};
const MIN_WIDTH = 850;

type Props = {
    title: string;
    date: string;
    contents: string;
    image: string;
    orientation?: string;
};
export default function Event (props: Props) {
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

    const renderText = () => {
        return (
            <div style={styles.text}>
                <div style={styles.title}>{props.title}</div>
                <div style={styles.date}>{props.date}</div>
                <div style={styles.description}>{props.contents}</div>
            </div>
        );
    };

    const renderPicture = () => {
        return (
            <div style={styles.picture}>
                <img
                    style={{
                        borderRadius: '5px',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 5px 1px'
                    }}
                    src={props.image}
                    alt="Event" />
            </div>
        );
    };

    if (width > MIN_WIDTH) {
        return (
            <Paper style={styles.container}>
                {props.orientation === 'flipped'
                    ? renderPicture()
                    : renderText()}
                {props.orientation === 'flipped'
                    ? renderText()
                    : renderPicture()}
            </Paper>
        );
    } else {
        return (
            <Paper style={{ ...styles.container, flexDirection: 'column', width: '' }}>
                {renderText()}
                {renderPicture()}
            </Paper>
        );
    }
}
