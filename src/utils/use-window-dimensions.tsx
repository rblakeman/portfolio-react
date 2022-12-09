import { useState, useEffect } from 'react';

export function useWindowDimensions() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

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
        setHeight(window.innerHeight);
    };

    return { width, height };
}
