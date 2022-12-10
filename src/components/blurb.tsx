import React from 'react';
import Button from '@material-ui/core/Button';
const styles = {
    blurb: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '280px',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
    } as React.CSSProperties,
    title: {
        fontSize: '2rem',
        fontWeight: 400,
        lineHeight: 1.2,
        color: '#5a5a5a',
        margin: '5px 0px',
        whiteSpace: 'nowrap'
    } as React.CSSProperties,
    ptext: {
        textAlign: 'center',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#5a5a5a',
        margin: '0px 0px, 5px, 0px'
    } as React.CSSProperties,
    button: {
        backgroundColor: '#0275d8',
        color: 'white',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
    } as React.CSSProperties
};

type Props = {
    circle: boolean;
    image: string;
    title: string;
    contents: string;
    button_url: string;
    button_text: string;
};
export default function Blurb (props: Props) {
    let radius = '0%';
    if (props.circle) {
        radius = '50%';
    }

    return (
        <div style={styles.blurb}>
            <img
                style={{ borderRadius: radius }}
                src={props.image}
                alt="CSUMB Logo"
                width="140"
                height="140" />
            <h2 style={styles.title}>{props.title}</h2>
            <p style={styles.ptext}>{props.contents}</p>
            <p>
                <Button
                    target={props.button_url.startsWith('https://') ? '_blank' : ''}
                    style={styles.button}
                    variant="outlined"
                    color="primary"
                    href={props.button_url}>
                    {props.button_text} &raquo;
                </Button>
            </p>
        </div>
    );
}
