import React, { useState } from 'react';
import Banner from '../components/banner';
import { Button, Typography } from '@material-ui/core';
const styles = {
    columns: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    } as React.CSSProperties,
    rows: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: '20px'
    } as React.CSSProperties,
    highlightedButton: {
        backgroundColor: '#0275d8',
        color: '#FFFFFF',
        boxShadow: 'none'
    } as React.CSSProperties,
    leftToggle: {
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
        textTransform: 'none'
    } as React.CSSProperties,
    rightToggle: {
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
        textTransform: 'none'
    } as React.CSSProperties,
    frame: {
        width: '80%',
        padding: '20px'
    } as React.CSSProperties
};

const gameResumeURL = 'https://drive.google.com/file/d/144XS1ex37gSW3SJ-7FPD1XlWZ-oBRCcW/preview';
const softwareResumeURL = 'https://drive.google.com/file/d/1lGmm72pw18xBkF5BZ1tDzC5WI5kLVihm/preview';

type Props = { };
export default function Resume (props: Props) {
    const [gameResume, setGameResume] = useState(false);

    return (
        <div style={styles.columns}>
            <Banner text="Resume" />
            <div style={styles.rows}>
                <Button
                    variant="contained"
                    style={
                        !gameResume
                            ? { ...styles.leftToggle, ...styles.highlightedButton }
                            : styles.leftToggle
                    }
                    onClick={() => setGameResume(false)}>
                    Software Resume
                </Button>
                <Button
                    variant="contained"
                    style={
                        gameResume
                            ? { ...styles.rightToggle, ...styles.highlightedButton }
                            : styles.rightToggle
                    }
                    onClick={() => setGameResume(true)}>
                    Game Resume
                </Button>
            </div>
            <div style={styles.frame}>
                <iframe
                    title={gameResume ? 'Game Resume' : 'Software Resume'}
                    src={gameResume ? gameResumeURL : softwareResumeURL}
                    width="100%"
                    height="920" />
            </div>
        </div>
    );
};
