import React from 'react';

import { Banner } from '../components/banner';
import { Event } from '../components/event';
import { useFetch } from '../utils';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    } as React.CSSProperties,
};

type EventPayload = {
    title: string;
    date: string;
    contents: string;
    image: string;
};

let VERCEL_DEPLOY = 'https://portfolio-express-rblakeman.vercel.app';
// Can't use simple if() since '' is a valid base_url for local development
if (typeof import.meta.env.VITE_BASE_URL === 'string') {
    VERCEL_DEPLOY = import.meta.env.VITE_BASE_URL;
}

export const Events = () => {
    const [res, err] = useFetch(`${VERCEL_DEPLOY}/api/events`);

    const renderEventList = () => {
        const events = res?.events || [];

        if (!events || !events.length) {
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
                key: idx,
            };

            return <Event {...eventProps} />;
        });
    };

    return (
        <div style={styles.container}>
            <Banner text='Events' />
            {err ? (
                <div>D'oh! Something went wrong, please try again later.</div>
            ) : (
                renderEventList()
            )}
        </div>
    );
};
