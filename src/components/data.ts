import type { Bed, Desk, Wardrobe } from "./card";

const bed: Bed = {
    id: "menu-bed",
    name: "Card",
    priority: 1,
    height: 75,
    width: 85,
    bunk: false,
    top: 0,
    left: 0,
    color: "lime"
};

const desk: Desk = {
    id: "menu-bed",
    name: "Card",
    priority: 2,
    height: 75,
    width: 85,
    bunk: false,
    top: 0,
    left: 0,
    color: "yellow"
};

const wardrobe: Wardrobe = {
    id: "menu-bed",
    name: "Card",
    priority: 3,
    height: 75,
    width: 85,
    bunk: false,
    top: 0,
    left: 0,
    color: "red"
};

export const tileBedSquare = [bed, desk, wardrobe];
