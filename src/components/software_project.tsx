import React, { useState } from 'react';
import { Paper, Button, Divider } from '@material-ui/core';

import { useWindowDimensions } from '../utils';

const MIN_DESKTOP_WIDTH = 850;
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
    } as React.CSSProperties,
    left: {
        display: 'flex',
        flexDirection: 'column',
        margin: '15px',
        maxWidth: '500px'
    } as React.CSSProperties,
    right: {
        display: 'flex',
        flexDirection: 'column',
        margin: '15px 0px',
        maxWidth: '500px'
    } as React.CSSProperties,

    //left
    title: {
        fontSize: '50px',
        color: '#5a5a5a',
        fontWeight: 400,
        lineHeight: 1,
        marginBottom: '15px'
    } as React.CSSProperties,
    tags: {
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

    //right
    icons: {
        display: 'flex',
        marginTop: '30px'
    } as React.CSSProperties,
    picture: { alignSelf: 'center' }, //display: 'flex', justifyContent: 'center' },
    buttons: {
        alignSelf: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    } as React.CSSProperties,
    buttonSelected: {
        backgroundColor: 'rgb(2, 117, 216)',
        color: 'white',
        margin: '0px 5px',
        textTransform: 'none',
        marginBottom: '10px'
    } as React.CSSProperties,
    buttonUnselected: {
        backgroundColor: 'white',
        color: 'black',
        margin: '0px 5px',
        textTransform: 'none',
        marginBottom: '10px'
    } as React.CSSProperties
};

type Icon = {
    type?: 'fa';
    text?: string;
    img?: any;
    obj?: any;
};

type Props = {
    title: string;
    tags: string;
    contents: string;
    list?: React.ReactNode[];
    images: { img: any; text: string; link?: string }[];
    icons: Icon[];
};
export default function SoftwareProject(props: Props) {
    const {
        title,
        tags,
        contents,
        list = [],
        images,
        icons
    } = props;
    const { width } = useWindowDimensions();
    const [currText, setCurrText] = useState(images[0].text);
    const [currImage, setCurrImage] = useState(images[0].img);
    const [currLink, setCurrLink] = useState(images[0].link);

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
                {list.map((bullet, idx) => {
                    return <li key={idx}>{bullet}</li>;
                })}
            </ul>
        );
    };

    const renderIcons = () => {
        return (
            <div style={styles.icons}>
                {icons.map((icon, idx) => {
                    if (icon.type && icon.type === 'fa') {
                        return icon.obj;
                    } else {
                        return (
                            <img
                                key={idx}
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
                    {images.map((image, idx) => {
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
                width > MIN_DESKTOP_WIDTH
                    ? styles.container
                    : { ...styles.container, flexDirection: 'column', width: '' }
            }>
            {renderLeftSide()}
            {renderRightSide()}
        </Paper>
    );
}
