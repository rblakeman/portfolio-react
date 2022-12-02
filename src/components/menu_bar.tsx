import React, { useState, useEffect } from 'react';
import { AppBar, MenuItem, Typography } from '@material-ui/core';
import {
    Event,
    Code,
    VideogameAsset,
    Edit,
    Description
} from '@material-ui/icons';
import type { Page } from '../pages/typings';

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
    } as React.CSSProperties,
    left: {
        display: 'flex',
        flexDirection: 'row'
    } as React.CSSProperties,
    linkText: { color: '#ddd', textDecoration: 'none' } as React.CSSProperties,
    nameText: { color: '#fff', textDecoration: 'none', fontSize: 'larger' } as React.CSSProperties,
    icons: { paddingRight: '5px' } as React.CSSProperties
};

type Props = {
    onPageClick: (pageName: Page) => void;
};
export default function MenuBar (props: Props) {
    const { onPageClick } = props;
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

    return (
        <AppBar style={styles.appBar}>
            {/* <div style={styles.left}> */}
            {/* <MenuItem style={styles.nameText}>Ryan Blakeman</MenuItem> */}
            <MenuItem
                onClick={() => onPageClick('Events')}
                style={styles.linkText}>
                <Event style={styles.icons} />
                {width >= 560 ? 'Events' : null}
            </MenuItem>
            <MenuItem
                onClick={() => onPageClick('Software')}
                style={styles.linkText}>
                <Code style={styles.icons} />
                {width >= 560 ? 'Software' : null}
            </MenuItem>
            <MenuItem
                onClick={() => onPageClick('Games')}
                style={styles.linkText}>
                <VideogameAsset style={styles.icons} />
                {width >= 560 ? 'Games' : null}
            </MenuItem>
            <MenuItem
                onClick={() => onPageClick('Research')}
                style={styles.linkText}>
                <Edit style={styles.icons} />
                {width >= 560 ? 'Research' : null}
            </MenuItem>
            {/* </div> */}
            <MenuItem
                onClick={() => onPageClick('Resume')}
                style={styles.linkText}>
                <Description style={styles.icons} />
                {width >= 560 ? 'Resume' : null}
            </MenuItem>
        </AppBar>
    );
}
