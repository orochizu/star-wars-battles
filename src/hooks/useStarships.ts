import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Starship, StarshipsResult } from '../types';

const mapToStarships = (res: Starship[]): Starship[] =>
    res.map((val: Starship) => ({
        name: val.name,
        crew: val.crew,
    }));

const getAllStarships = async (
    setStarships: Dispatch<SetStateAction<Starship[]>>,
    signal: AbortSignal,
): Promise<void> => {
    let response = await fetch(`https://swapi.co/api/starships/`, { signal });
    let data = (await response.json()) as StarshipsResult;

    let starships = mapToStarships(data.results);

    while (data.next) {
        response = await fetch(data.next, { signal });
        data = await response.json();

        starships = [...starships, ...mapToStarships(data.results)];
    }

    setStarships(starships);
};

const useStarships = (): [Starship[], boolean, string | null] => {
    const [starships, setStarships] = useState<Starship[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getAllStarships(setStarships, signal)
            .finally(() => setLoading(false))
            .catch(error => setError(error));

        return (): void => controller.abort();
    }, []);

    return [starships, loading, error];
};

export default useStarships;
