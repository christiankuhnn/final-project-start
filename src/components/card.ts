export interface Bed {
    id: string;
    name: "Card";
    bunk: boolean;
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export type Tile = Bed;
