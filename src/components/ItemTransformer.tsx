/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, ReactDOM } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useDrag } from "react-dnd";
import { setCommentRange, setTokenSourceMapRange } from "typescript";
import type { Tile } from "./card";
import { tileBedSquare } from "./data";

interface ItemSet {
    item: Tile;
    deleteTile?: (id: string) => void;
    width: number;
    height: number;
}

const TileItem = ({ item, deleteTile, width, height }: ItemSet) => {
    const { id, left, top, color } = item;
    const [position, setPosition] = useState({ top: top, left: left });
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const [title, setModTitle] = useState(item.id);
    const [desc, setModalDescription] = useState("");
    const [name, setName] = useState("Empty");
    // const [color, setColor] = useState(item.color);

    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModTitle(event.target.value);
    };
    const descHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModalDescription(event.target.value);
    };
    const cardPropHandler = () => {
        setName(title);
    };

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: "Furniture",
            id,
            name,
            left: id.includes("menu") ? position.left : left,
            top: id.includes("menu") ? position.top : top,
            height,
            width,
            color
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    const styles: Record<string, unknown> = {
        position: id.includes("menu") ? "static" : "absolute",
        left,
        top,
        height: id.includes("menu") ? height / 2 : height,
        width: id.includes("menu") ? width / 1 : width,
        backgroundColor: color,
        margin: 0
    };

    const showDimensionsAndIcon = isHovered && !id.includes("menu");

    useEffect(() => {
        const elem = document.getElementById(item.id)?.getBoundingClientRect();
        const t = elem ? elem.y : 0;
        const l = elem ? elem.x : 0;
        setPosition({ top: t, left: l });
    }, []);
    return (
        <div
            id={item.id}
            style={styles}
            ref={drag}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ width: "100%", height: "100%" }}>
                {showDimensionsAndIcon && (
                    <button onClick={handleShowModal}>{name}</button>
                )}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header>
                        <Modal.Title>Edit {name}</Modal.Title>
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
                                <p></p>
                                <Form.Label>Desc</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="I need to..."
                                    value={desc}
                                    onChange={descHandler}
                                    autoFocus
                                ></Form.Control>
                                <p></p>

                                <Button onClick={cardPropHandler}>Save</Button>
                            </Form.Group>
                        </Col>
                    </Modal.Body>
                </Modal>
                {showDimensionsAndIcon && (
                    <p
                        id="delete-button"
                        onClick={() => deleteTile && deleteTile(id)}
                    >
                        -delete-
                    </p>
                )}
            </div>
        </div>
    );
};

export default TileItem;
