import { Divider } from '@mui/material';
import React, { useRef, useState } from 'react';

import { Footer } from './components/footer';
import { MenuBar } from './components/menu_bar';
import { NotificationBar } from './components/notification_bar';

import { Events } from './pages/events';
import Games from './pages/games';
import { Home } from './pages/home';
import { Research } from './pages/research';
import { Resume } from './pages/resume';
import { Software } from './pages/software';
import type { Page } from './pages/typings';
import { useOnMount } from './utils';

const styles = {
    root: {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    } as React.CSSProperties,
};

export const App = () => {
    const [currPage, setCurrPage] = useState('');
    const myRef = useRef<HTMLDivElement>(null);

    useOnMount(() => {
        console.log('last updated: Jun 11, 2026');
    });

    const setPage = (newPage: Page) => {
        setCurrPage(newPage);
        window.scrollTo(0, myRef.current!.offsetTop);
    };

    const renderContentPage = () => {
        if (currPage === '' || currPage === 'Events') {
            return <Events />;
        } else if (currPage === 'Software') {
            return <Software />;
        } else if (currPage === 'Games') {
            return <Games />;
        } else if (currPage === 'Research') {
            return <Research />;
        } else if (currPage === 'Resume') {
            return <Resume />;
        }
    };

    return (
        <div
            style={styles.root}
            className='App'>
            <NotificationBar />
            <MenuBar onPageClick={(newPage: Page) => setPage(newPage)} />
            <Home />
            <div ref={myRef}>
                <Divider
                    variant='middle'
                    style={{ margin: '50px 16px 16px 16px' }}
                />
            </div>
            <div style={{ margin: '32px' }}>
                <div style={{ padding: '16px' }}>{renderContentPage()}</div>
            </div>
            <Divider
                variant='middle'
                style={{ margin: '50px 0px' }}
            />
            <Footer />
        </div>
    );
};

export default App;
