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
    url: {
        marginTop: '10px'
    } as React.CSSProperties,
    urltext: {
        color: '#0275D8'
    } as React.CSSProperties,

    //right
    picture: {} as React.CSSProperties,
    buttons: { alignSelf: 'center' } as React.CSSProperties,
    buttonSelected: {
        backgroundColor: 'rgb(2, 117, 216)',
        color: 'white',
        margin: '0px 5px',
        textTransform: 'none'
    } as React.CSSProperties,
    buttonUnselected: {
        backgroundColor: 'white',
        color: 'black',
        margin: '0px 5px',
        textTransform: 'none'
    } as React.CSSProperties
};

type Icon = {
    type?: 'fa' | 'svg';
    size: string;
    text: string;
    img?: string;
    svg?: string;
    obj?: string;
};

type Props = {
    title: string;
    tags: string;
    contents: string;
    externalLink?: { url: string; text: string; }[];
    list?: React.ReactNode[];
    images: { img: any; text: string }[];
    imageSize?: string;
    icons?: Icon[];
};
export default function GamesProject(props: Props) {
    const {
        title,
        tags,
        contents,
        externalLink,
        list = [],
        images,
        imageSize,
        icons = []
    } = props;
    const { width } = useWindowDimensions();
    const [currImage, setCurrImage] = useState(images[0].img);

    const renderLeftSide = () => {
        return (
            <div style={styles.left}>
                <div>
                    <div style={styles.title}>{title}</div>
                    <div style={styles.tags}>{tags}</div>
                    <div style={styles.description}>
                        {contents}
                        {externalLink ? (
                            <div style={styles.url}>
                                <a
                                    target="_blank"
                                    style={styles.urltext}
                                    href={externalLink[0].url}>
                                    {externalLink[0].text}
                                </a>
                            </div>
                        ) : null}
                        {list ? (list.length > 0 ? renderBulletList() : null) : null}
                    </div>
                </div>
                <div style={{ marginTop: '30px' }}>
                    {icons ? (icons.length > 0 ? renderIcons() : null) : null}
                </div>
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
            <div>
                {icons.map((icon, idx) => {
                    if (icon.type && icon.type === 'fa') {
                        return icon.obj;
                    } else if (icon.type && icon.type === 'svg') {
                        return (
                            <img
                                style={{ maxWidth: `${icon.size}`, marginLeft: '10px' }}
                                src={icon.svg}
                                key={idx} />
                        );
                    } else {
                        return <img key={idx} src={icon.img} alt={icon.text} />;
                    }
                })}
            </div>
        );
    };

    const renderRightSide = () => {
        return (
            <div style={styles.right}>
                <div style={styles.picture}>
                    <img
                        style={{
                            borderRadius: '10px',
                            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 4px',
                            maxWidth: imageSize || '500px'
                        }}
                        src={currImage}
                        alt="Games Project" />
                </div>
                <Divider variant="middle" style={{ margin: '20px 0px' }} />
                <div style={styles.buttons}>
                    {images.map((image, idx) => {
                        if (currImage === image.img)
                            return (
                                <Button
                                    variant="outlined"
                                    style={styles.buttonSelected}
                                    key={idx}
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        setCurrImage(image.img);
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
                                    setCurrImage(image.img);
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
