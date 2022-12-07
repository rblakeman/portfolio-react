import React, { Component } from 'react';
import { Divider, Tabs, Tab, AppBar } from '@material-ui/core';

import MenuBar from './components/menu_bar';
import NotificationBar from './components/notification_bar';
import Footer from './components/footer';

import Home from './pages/home';
import Events from './pages/events';
import Software from './pages/software';
import Games from './pages/games';
import Research from './pages/research';
import Resume from './pages/resume';
import type { Page } from './pages/typings';

const styles = {
    root: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    } as React.CSSProperties
};

type Props = { };
type State = { currPage: string; };
class App extends Component<Props, State> {
    myRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.myRef = React.createRef();

        this.state = {
            currPage: ''
        };

        console.log('last updated: Dec 7, 2022');
    }

    setPage = (newPage: Page) => {
        this.setState({ currPage: newPage });
        window.scrollTo(0, this.myRef.current!.offsetTop);
    };

    renderContentPage() {
        const { currPage } = this.state;
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
    }

    render() {
        return (
            <div style={styles.root} className="App">
                <NotificationBar />
                <MenuBar onPageClick={(newPage: Page) => this.setPage(newPage)} />
                <Home />
                <div ref={this.myRef}>
                    <Divider variant="middle" style={{ margin: '50px 16px 16px 16px' }} />
                </div>
                <div style={{ margin: '32px' }}>
                    <div style={{ padding: '16px' }}>{this.renderContentPage()}</div>
                </div>
                <Divider variant="middle" style={{ margin: '50px 0px' }} />
                <Footer />
            </div>
        );
    }
}

export default App;
