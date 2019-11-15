import { RoundStatus } from './enums';

export interface Person {
    name: string;
    mass: number | string;
}

export interface PeopleResult {
    next: string;
    results: Person[];
}

export interface Starship {
    name: string;
    crew: number | string;
}

export interface StarshipsResult {
    next: string;
    results: Starship[];
}

export interface Card {
    title: string;
    status: RoundStatus;
}
