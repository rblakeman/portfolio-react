import React from 'react';
import { AppBar, MenuItem, Typography } from '@material-ui/core';
import {
    Event,
    Code,
    VideogameAsset,
    Edit,
    Description
} from '@material-ui/icons';

import type { Page } from '../pages/typings';
import { useWindowDimensions } from '../utils';

const MIN_DESKTOP_WIDTH = 560;
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
    const { width } = useWindowDimensions();

    return (
        <AppBar style={styles.appBar}>
            {/* <div style={styles.left}> */}
            {/* <MenuItem style={styles.nameText}>Ryan Blakeman</MenuItem> */}
            <MenuItem
                onClick={() => onPageClick('Events')}
                style={styles.linkText}>
                <Event style={styles.icons} />
                {width >= MIN_DESKTOP_WIDTH ? 'Events' : null}
            </MenuItem>
            <MenuItem
                onClick={() => onPageClick('Software')}
                style={styles.linkText}>
                <Code style={styles.icons} />
                {width >= MIN_DESKTOP_WIDTH ? 'Software' : null}
            </MenuItem>
            <MenuItem
                onClick={() => onPageClick('Games')}
                style={styles.linkText}>
                <VideogameAsset style={styles.icons} />
                {width >= MIN_DESKTOP_WIDTH ? 'Games' : null}
            </MenuItem>
            <MenuItem
                onClick={() => onPageClick('Research')}
                style={styles.linkText}>
                <Edit style={styles.icons} />
                {width >= MIN_DESKTOP_WIDTH ? 'Research' : null}
            </MenuItem>
            {/* </div> */}
            <MenuItem
                onClick={() => onPageClick('Resume')}
                style={styles.linkText}>
                <Description style={styles.icons} />
                {width >= MIN_DESKTOP_WIDTH ? 'Resume' : null}
            </MenuItem>
        </AppBar>
    );
}
