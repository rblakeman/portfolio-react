import React from 'react';
import AppBar from '@material-ui/core/AppBar';
const styles = {
    appBar: {
        height: '48px',
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        marginTop: 45,
        backgroundColor: '#0275d8',
        justifyContent: 'center'
    } as React.CSSProperties,
    linkText: {
        textDecoration: 'none',
        color: 'white'
    } as React.CSSProperties
};

type Props = { };
export default (props: Props) => {
    return (
        <AppBar style={styles.appBar} position="relative">
            <a
                style={styles.linkText}
                href="https://github.com/rblakeman/portfolio-react">
                Click here to view Repository
            </a>
        </AppBar>
    );
};
