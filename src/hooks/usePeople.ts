import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { PeopleResult, Person } from '../types';

const mapToPeople = (res: Person[]): Person[] =>
    res.map((val: Person) => ({
        name: val.name,
        mass: val.mass,
    }));

const getAllPeople = async (
    setPeople: Dispatch<SetStateAction<Person[]>>,
    signal: AbortSignal,
): Promise<void> => {
    let response = await fetch(`https://swapi.co/api/people/`, { signal });
    let data = (await response.json()) as PeopleResult;

    let people = mapToPeople(data.results);

    while (data.next) {
        response = await fetch(data.next, { signal });
        data = await response.json();

        people = [...people, ...mapToPeople(data.results)];
    }

    setPeople(people);
};

const usePeople = (): [Person[], boolean, string | null] => {
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getAllPeople(setPeople, signal)
            .then(() => setLoading(false))
            .catch(error => setError(error));

        return (): void => controller.abort();
    }, []);

    return [people, loading, error];
};

export default usePeople;
