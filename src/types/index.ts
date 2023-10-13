export interface CardType {
    id: string;
    flipped: boolean;
    backImage: string;
    frontImage: string;
    matchingCardId: string;
};

export interface images {
    files: string[]
};

export interface GameFlow {
    point: number;
    fail: number;
    turn: number;
};

export interface User {
    name: string
};

export enum Difficulty {
    Easy = 5,
    Medium = 10,
    Hard = 20
}