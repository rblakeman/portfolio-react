import {
    Code,
    Description,
    Edit,
    Event,
    VideogameAsset,
} from '@mui/icons-material';
import { AppBar, Button } from '@mui/material';
import React from 'react';

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
        padding: '0px 20px',
    } as React.CSSProperties,
    left: {
        display: 'flex',
        flexDirection: 'row',
    } as React.CSSProperties,
    linkText: { color: '#ddd', textDecoration: 'none' } as React.CSSProperties,
    nameText: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: 'larger',
    } as React.CSSProperties,
    icons: { paddingRight: '5px' } as React.CSSProperties,
};

type Props = {
    onPageClick: (pageName: Page) => void;
};
export const MenuBar = (props: Props) => {
    const { onPageClick } = props;
    const { width } = useWindowDimensions();

    return (
        <AppBar style={styles.appBar}>
            {/* <div style={styles.left}> */}
            {/* <MenuItem style={styles.nameText}>Ryan Blakeman</MenuItem> */}
            <Button
                sx={{
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 400,
                }}
                onClick={() => onPageClick('Events')}
                style={styles.linkText}>
                <Event style={styles.icons} />
                {width >= MIN_DESKTOP_WIDTH ? 'Events' : null}
            </Button>
            <Button
                sx={{
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 400,
                }}
                onClick={() => onPageClick('Software')}
                style={styles.linkText}>
                <Code style={styles.icons} />
                {width >= MIN_DESKTOP_WIDTH ? 'Software' : null}
            </Button>
            <Button
                sx={{
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 400,
                }}
                onClick={() => onPageClick('Games')}
                style={styles.linkText}>
                <VideogameAsset style={styles.icons} />
                {width >= MIN_DESKTOP_WIDTH ? 'Games' : null}
            </Button>
            <Button
                sx={{
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 400,
                }}
                onClick={() => onPageClick('Research')}
                style={styles.linkText}>
                <Edit style={styles.icons} />
                {width >= MIN_DESKTOP_WIDTH ? 'Research' : null}
            </Button>
            {/* </div> */}
            <Button
                sx={{
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 400,
                }}
                onClick={() => onPageClick('Resume')}
                style={styles.linkText}>
                <Description style={styles.icons} />
                {width >= MIN_DESKTOP_WIDTH ? 'Resume' : null}
            </Button>
        </AppBar>
    );
};
