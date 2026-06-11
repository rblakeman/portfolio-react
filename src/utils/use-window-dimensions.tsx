import { useState, useLayoutEffect } from 'react';

export function useWindowDimensions() {
    const [width, setWidth] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth : 0,
    );
    const [height, setHeight] = useState(() =>
        typeof window !== 'undefined' ? window.innerHeight : 0,
    );

    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useLayoutEffect(() => {
        window.addEventListener('resize', updateWindowDimensions);

        return function cleanup() {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    });

    return { width, height };
}
