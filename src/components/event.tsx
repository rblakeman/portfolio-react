import React from 'react';
import Paper from '@material-ui/core/Paper';

import { useWindowDimensions } from '../utils';

const MIN_DESKTOP_WIDTH = 850;
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

type Props = {
    title: string;
    date: string;
    contents: string;
    image: any;
    flipped?: boolean;
};
export default function Event (props: Props) {
    const { width } = useWindowDimensions();

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

    if (width > MIN_DESKTOP_WIDTH) {
        return (
            <Paper style={styles.container}>
                {props.flipped
                    ? renderPicture()
                    : renderText()}
                {props.flipped
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
