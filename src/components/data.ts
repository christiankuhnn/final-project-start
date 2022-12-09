import type { Card1, Card2, Card3 } from "./card";

const card1: Card1 = {
    id: "menu-bed",
    time: "",
    name: "Card",
    priority: 1,
    height: 75,
    width: 85,
    bunk: false,
    top: 0,
    left: 0,
    color: "lime"
};

const card2: Card2 = {
    id: "menu-bed",
    time: "",
    name: "Card",
    priority: 2,
    height: 75,
    width: 85,
    bunk: false,
    top: 0,
    left: 0,
    color: "yellow"
};

const card3: Card3 = {
    id: "menu-bed",
    time: "",
    name: "Card",
    priority: 3,
    height: 75,
    width: 85,
    bunk: false,
    top: 0,
    left: 0,
    color: "red"
};

export const tileBedSquare = [card1, card2, card3];
