import React, { Component } from 'react';

import Banner from '../components/banner';
import Event from '../components/event';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-brands-svg-icons';
// import {} from '@fortawesome/free-solid-svg-icons';
import { eventList } from './event-list';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    } as React.CSSProperties
};

const FA_SIZE = '5x';
const ICON_SIZE = '80px';

type Props = {};
export default function Events (props: Props) {
    const renderEventList = () => {
        return eventList.map((event, idx) => {
            const { title, date, contents, image } = event;

            const eventProps = {
                title,
                date,
                contents,
                image,
                flipped: idx % 2 === 0,
                key: idx
            };

            return (
                <Event {...eventProps} />
            );
        });
    };

    return (
        <div style={styles.container}>
            <Banner text="Events" />
            {renderEventList()}
        </div>
    );
};
