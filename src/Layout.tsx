/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import React, { useState, useCallback, useEffect } from "react";
import "./styles/index.css";
import "./styles/Layout.css";
import { Container, Row, Button, Col } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import type { Tile } from "./components/card";
import FurnitureList from "./components/Lister";
import RoomBoard from "./components/CBoard";

interface SavedRoom {
    id: number;
    furniture: Tile[];
}

let cardCount = 0;

const Layout = () => {
    const [savedRooms, setSavedRooms] = useState<SavedRoom[]>([]);
    const [tilePartBoard, setTilePartBoard] = useState<Tile[]>([]);

    const removeFromCalend = (id: string) => {
        const newItems = tilePartBoard.filter((f) => f.id !== id);
        setTilePartBoard(newItems);
        cardCount = newItems.length;
    };

    const addToCalend = (item: Tile, left: number, top: number) => {
        const newId = `${item.name}${tilePartBoard.length + 1}`;
        const newItem = { ...item, id: newId, left: left, top: top };
        const newList = [...tilePartBoard, newItem];
        cardCount = newList.length;
        setTilePartBoard(newList);
    };

    const emptyCalend = () => {
        setTilePartBoard([]);
        cardCount = 0;
    };

    const moveTile = useCallback(
        (id, left, top) => {
            const newItems = tilePartBoard.map((item) => {
                return item.id === id
                    ? { ...item, top: top, left: left }
                    : item;
            });
            setTilePartBoard(newItems);
        },
        [tilePartBoard]
    );

    const createNewRoom = () => {
        const newSavedRoom: SavedRoom = {
            id: savedRooms.length + 1,
            furniture: [...tilePartBoard]
        };
        const newSavedRooms = [...savedRooms, newSavedRoom];
        setSavedRooms(newSavedRooms);
        setTilePartBoard([]);
    };

    const switchToRoom = (id: number) => {
        const newRoom = savedRooms[id - 1];
        setTilePartBoard(newRoom.furniture);
    };

    React.useEffect(() => {
        console.log(tilePartBoard);
    }, [tilePartBoard]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div id="grid">
                <div
                    id="left-menu-container"
                    style={{ backgroundColor: "pink" }}
                >
                    <Container>
                        <FurnitureList />
                        <h3>_____________</h3>
                        <Row>
                            <Button
                                style={{ backgroundColor: "transparent" }}
                                onClick={() => createNewRoom()}
                            >
                                {" "}
                                New Task
                            </Button>
                        </Row>
                        <Row>
                            <span>
                                <p></p>
                            </span>
                        </Row>
                        <Col>
                            <div id="room-selection-container">
                                {savedRooms.map((T) => (
                                    <Button
                                        className="room-selection-button"
                                        key={`room${T.id}`}
                                        onClick={() => switchToRoom(T.id)}
                                    >
                                        Tile {T.id}
                                    </Button>
                                ))}
                            </div>
                        </Col>
                    </Container>
                </div>
                <div id="logo-container">
                    <h5>
                        Calendar Project by Christian Khunn and Pranav Kamath
                    </h5>
                </div>
                <div id="top-menu-container">
                    <Container>
                        <Row>
                            <div id="cardCount"># OF CARDS: {cardCount}</div>
                            <Button onClick={() => emptyCalend()}>
                                Clear Calendar
                            </Button>
                        </Row>
                    </Container>
                </div>
                <div id="main-board-container">
                    <RoomBoard
                        TilePartBoard={tilePartBoard}
                        moveTile={moveTile}
                        addToCalend={addToCalend}
                        removeFromCalend={removeFromCalend}
                    />
                </div>
            </div>
        </DndProvider>
    );
};
export default Layout;
