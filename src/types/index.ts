import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';

export type ChampionType = 'people' | 'starships';

export interface Person {
    name: string;
    mass: string;
}

export interface PeopleResult {
    next: string;
    results: Person[];
}

export interface Starship {
    name: string;
    crew: string;
}

export interface StarshipsResult {
    next: string;
    results: Starship[];
}

export interface Response {
    data: Person | Starship;
    loading: boolean;
    error?: AxiosError;
    response?: AxiosResponse;
    refetch: () => AxiosPromise<Person | Starship>;
}
