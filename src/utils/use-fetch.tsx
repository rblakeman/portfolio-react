import { useState } from 'react';
import { useOnMount } from './on-mount';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useFetch<T = any, E = any>(url: string) {
    const [response, setResponse] = useState<T>();
    const [error, setError] = useState<E>();

    useOnMount(() => {
        callBackendAPI()
            .then((res: T) => setResponse(res))
            .catch((err: E) => setError(err));
    });

    const callBackendAPI = async () => {
        const response = await fetch(url);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }

        return body;
    };

    return [response, error];
}
