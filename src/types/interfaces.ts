import { RoundStatus } from './enums';

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

export interface Card {
    title: string;
    status: RoundStatus;
}
