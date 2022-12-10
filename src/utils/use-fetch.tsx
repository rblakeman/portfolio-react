import { useState, useEffect } from 'react';

export function useFetch(url: string) {
    const [response, setResponse] = useState({}) as any;
    const [error, setError] = useState({}) as any;

    useEffect(() => {
        callBackendAPI()
            .then((res: any) => setResponse(res))
            .catch((err: any) => setError(err));
    }, []);

    const callBackendAPI = async () => {
        const response = await fetch(url);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }

        return body;
    };

    return [ response, error ];
}
