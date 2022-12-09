/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import React, { useState, useCallback, useEffect, ChangeEvent } from "react";
import "./styles/index.css";
import "./styles/Layout.css";
import { Container, Row, Button, Col, Modal, Form } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import type { Tile } from "./components/card";
import FurnitureList from "./components/Lister";
import RoomBoard from "./components/CBoard";
import TileItem from "./components/ItemTransformer";

interface SavedTask {
    id: number;
    pID: number;
    furniture: Tile[];
}

let cardCount = 0;
const cardList = [];

// const changeView = (event: ChangeEvent) => {
//     setView(event.target.value);
// };

const Layout = () => {
    const viewList = ["All"];
    const viewPrioList = ["All", "1", "2", "3"];
    const [savedTasks, setSavedTasks] = useState<SavedTask[]>([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [tilePartBoard, setTilePartBoard] = useState<Tile[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [view, setView] = useState(viewPrioList[0]);
    const [option, setOption] = useState(1);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    function changePrioOption() {
        if (view === "1") {
            setOption(1);
        } else if (view === "2") {
            setOption(2);
        } else if (view === "3") {
            setOption(3);
        }
        handleCloseModal();
    }

    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const descHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(event.target.value);
    };

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
        // TileList.append(newItem);
        setTilePartBoard(newList);
        cardList.push([newList]);
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

    const addTask = () => {
        const newSavedTask: SavedTask = {
            id: savedTasks.length + 1,
            pID: 1,
            furniture: [...tilePartBoard]
        };
        const newSavedTasks = [...savedTasks, newSavedTask];
        setSavedTasks(newSavedTasks);
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
                        {/* <FilterMDL /> */}
                        <Row></Row>
                        <Row>
                            <span>
                                <p></p>
                            </span>
                        </Row>
                        <div>
                            {" "}
                            <Row>
                                <Button
                                    variant="dark"
                                    data-testid="chooseOption"
                                >
                                    Increase Board Size
                                </Button>
                            </Row>
                            <Row>
                                <Button
                                    variant="dark"
                                    data-testid="chooseOption"
                                >
                                    Decrease Board Size
                                </Button>
                            </Row>
                        </div>
                        <Col>
                            <div id="room-selection-container">
                                {savedTasks.map((T) => (
                                    <Button
                                        className="room-selection-button"
                                        key={`room${T.id}`}
                                        onClick={handleShowModal}
                                    >
                                        Task {T.id}
                                    </Button>
                                ))}
                                <Modal
                                    show={showModal}
                                    onHide={handleCloseModal}
                                >
                                    <Modal.Header>
                                        <Modal.Title>
                                            {" "}
                                            |Edit This Task|: {}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Col>
                                            <Form.Group className="makeNoteTitle">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control
                                                    type="textarea"
                                                    placeholder="Task title..."
                                                    value={title}
                                                    onChange={titleHandler}
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group className="makeNoteTitle">
                                                <Form.Label>
                                                    Description
                                                </Form.Label>
                                                <Form.Control
                                                    type="textarea"
                                                    placeholder="Desc..."
                                                    value={desc}
                                                    onChange={descHandler}
                                                    autoFocus
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="success"
                                            onClick={changePrioOption}
                                        >
                                            Save
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div>
                                <Button onClick={() => emptyCalend}>
                                    Sort
                                </Button>
                            </div>
                        </Col>
                    </Container>
                </div>
                <div id="logo-container">
                    <h5>
                        Scheduler Project by Christian Khunn and Pranav Kamath
                    </h5>
                </div>
                <div id="top-menu-container">
                    <Container>
                        <Row>
                            <div id="cardCount"># OF TASKS: {cardCount}</div>
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
