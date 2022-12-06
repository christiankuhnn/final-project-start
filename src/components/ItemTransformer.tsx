/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, ReactDOM } from "react";
import { Button } from "react-bootstrap";
import { useDrag } from "react-dnd";
import type { Tile } from "./card";

interface ItemSet {
    item: Tile;
    deleteTile?: (id: string) => void;
}

const TileItem = ({ item, deleteTile }: ItemSet) => {
    const { id, name, left, top, height, width, color } = item;
    const [position, setPosition] = useState({ top: top, left: left });
    const [isHovered, setIsHovered] = useState(false);

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
        width: id.includes("menu") ? width / 2 : width,
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
                    <>
                        <Button>View Task</Button>
                    </>
                )}
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
