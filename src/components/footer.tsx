import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded';

const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'space-between',
        margin: 'auto', //'0px 32px 32px 32px',
        padding: '0px 48px 48px 48px', //'0px 16px 16px 16px',
        maxWidth: '1250px'
    } as React.CSSProperties,
    scrollButton: {
        // width: '64px',
        height: '64px',
        bottom: '30px',
        right: '30px',
        padding: '10px',
        position: 'fixed',
        borderRadius: '100%',
        backgroundColor: '#FFFFFF',
        color: '#0275D8',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
    } as React.CSSProperties
};

type Props = { };
export default function Footer (props: Props) {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 160) {
                setHidden(false);
            } else {
                setHidden(true);
            }
        };

        // componentWillUnmount
        return function cleanup() {
            window.onscroll = null;
        };
    });

    const getYear = () => {
        return new Date().getFullYear();
    };

    return (
        <div style={styles.footer}>
            <p style={{ margin: 0 }}>
                &copy; {getYear()} Ryan Blakeman &middot;
                <a href="mailto:rblakeman31@gmail.com">Email</a> &middot;
                <a href="https://www.linkedin.com/in/rblakeman/">LinkedIn</a> &middot;
                <a href="https://www.github.com/rblakeman/">GitHub</a>
                <br />
            </p>
            <Button
                style={
                    hidden
                        ? { ...styles.scrollButton, visibility: 'hidden' }
                        : styles.scrollButton
                }
                onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                <KeyboardArrowUpRounded style={{ height: '36px', width: '36px' }} />
            </Button>
        </div>
    );
}
