import React from 'react';

import Banner from '../components/banner';
import Event from '../components/event';
import { useFetch } from '../utils';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    } as React.CSSProperties
};

type EventPayload = {
    title: string;
    date: string;
    contents: string;
    image: string;
};

const FA_SIZE = '5x';
const ICON_SIZE = '80px';
const VERCEL_DEPLOY = 'https://portfolio-express-rblakeman.vercel.app';

type Props = {};
export default function Events (props: Props) {
    const [ res, err ] = useFetch(`${VERCEL_DEPLOY}/api/events`);

    const renderEventList = () => {
        const events = res.events! || [];

        if (!events.length) {
            return <div>Loading...</div>;
        }

        return events.map((event: EventPayload, idx: number) => {
            const { title, date, contents, image } = event;

            const eventProps = {
                title,
                date,
                contents,
                image: `${VERCEL_DEPLOY}${image}`,
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
