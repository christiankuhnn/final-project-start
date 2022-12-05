export interface Bed {
    id: string;
    name: "Card";
    bunk: boolean;
    priority: number;
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export interface Desk {
    id: string;
    name: "Card";
    bunk: boolean;
    priority: number;
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}
export interface Wardrobe {
    id: string;
    name: "Card";
    bunk: boolean;
    priority: number;
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export type Tile = Bed;
export type Tile2 = Desk;
export type Tile3 = Wardrobe;
