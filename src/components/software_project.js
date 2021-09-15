import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { Paper, Button, Divider } from '@material-ui/core';
const styles = {
    container: {
        maxWidth: '1125px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '16px',
        padding: '16px',
        backgroundColor: '#f7fafd'
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        margin: '15px',
        maxWidth: '500px'
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        margin: '15px 0px',
        maxWidth: '500px'
    },

    //left
    title: {
        fontSize: '50px',
        color: '#5a5a5a',
        fontWeight: 400,
        lineHeight: 1,
        marginBottom: '15px'
    },
    tags: {
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

    //right
    icons: {
        display: 'flex',
        marginTop: '30px'
    },
    picture: { alignSelf: 'center' }, //display: 'flex', justifyContent: 'center' },
    buttons: {
        alignSelf: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    buttonSelected: {
        backgroundColor: 'rgb(2, 117, 216)',
        color: 'white',
        margin: '0px 5px',
        textTransform: 'none',
        marginBottom: '10px'
    },
    buttonUnselected: {
        backgroundColor: 'white',
        color: 'black',
        margin: '0px 5px',
        textTransform: 'none',
        marginBottom: '10px'
    }
};

export default function SoftwareProject({
    title,
    tags,
    contents,
    list,
    images,
    icons
}) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [currText, setCurrText] = useState(images[0].text);
    const [currImage, setCurrImage] = useState(images[0].img);
    const [currLink, setCurrLink] = useState(images[0].link);
    const MIN_WIDTH = 850;

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions);

        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    }, []);

    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    const renderLeftSide = () => {
        return (
            <div style={styles.left}>
                <div>
                    <div style={styles.title}>{title}</div>
                    <div style={styles.tags}>{tags}</div>
                    <div style={styles.description}>
                        {contents}
                        {list ? (list.length > 0 ? renderBulletList() : null) : null}
                    </div>
                </div>
                {icons ? (icons.length > 0 ? renderIcons() : null) : null}
            </div>
        );
    };

    const renderBulletList = () => {
        return (
            <ul>
                {_.map(list, (bullet, idx) => {
                    return <li key={idx}>{bullet}</li>;
                })}
            </ul>
        );
    };

    const renderIcons = () => {
        return (
            <div style={styles.icons}>
                {_.map(icons, (icon, idx) => {
                    if (icon.type && icon.type === 'fa') {
                        return icon.obj;
                    } else {
                        return (
                            <img
                                style={{ width: '80px', height: '80px', marginLeft: '10px' }}
                                src={icon.img}
                                alt={icon.text} />
                        );
                    }
                })}
            </div>
        );
    };

    const renderRightSide = () => {
        return (
            <div style={styles.right}>
                <div style={styles.picture}>
                    {currImage !== null ? (
                        currLink ? (
                            <a href={currLink} target="_blank">
                                <img
                                    style={{
                                        borderRadius: '10px',
                                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 4px',
                                        maxWidth: '500px'
                                        // maxHeight: '500px'
                                    }}
                                    src={currImage}
                                    alt="Software Project" />
                            </a>
                        ) : (
                            <img
                                style={{
                                    borderRadius: '10px',
                                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 4px',
                                    maxWidth: '500px'
                                    // maxHeight: '500px'
                                }}
                                src={currImage}
                                alt="Software Project" />
                        )
                    ) : (
                        <iframe
                            src={currLink}
                            style={{ width: '450px', height: '400px' }} />
                    )}
                </div>
                <Divider variant="middle" style={{ margin: '20px 0px' }} />
                <div style={styles.buttons}>
                    {_.map(images, (image, idx) => {
                        if (currText === image.text)
                            return (
                                <Button
                                    variant="outlined"
                                    style={styles.buttonSelected}
                                    key={idx}
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        setCurrText(image.text);
                                        setCurrImage(image.img);
                                        setCurrLink(image.link);
                                    }}>
                                    {image.text}
                                </Button>
                            );

                        return (
                            <Button
                                variant="outlined"
                                style={styles.buttonUnselected}
                                key={idx}
                                onClick={(ev) => {
                                    ev.preventDefault();
                                    setCurrText(image.text);
                                    setCurrImage(image.img);
                                    setCurrLink(image.link);
                                }}>
                                {image.text}
                            </Button>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <Paper
            style={
                width > MIN_WIDTH
                    ? styles.container
                    : { ...styles.container, flexDirection: 'column', width: '' }
            }>
            {renderLeftSide()}
            {renderRightSide()}
        </Paper>
    );
}
