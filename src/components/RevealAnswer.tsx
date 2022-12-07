/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { tileBedSquare } from "./data";
import TileItem from "./ItemTransformer";

export function RevealAnswer(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const t = [tileBedSquare[0], tileBedSquare[1], tileBedSquare[2]];
    // const [colTitle, setColTitle] = useState<string>("All");

    function filterThrough(): void {
        if (counter == 3) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    }

    // function changeTitle(): void {
    //     if (counter == 1) {
    //         setColTitle("Low");
    //     }
    //     if (counter == 2) {
    //         setColTitle("Medium");
    //     }
    //     if (counter == 3) {
    //         setColTitle("High");
    //     } else {
    //         setColTitle("All");
    //     }
    // }

    return (
        <div>
            {
                <div>
                    {" "}
                    <h5>Drag Task To Calendar</h5> <p>Green : Low Priority</p>
                    <p>Yellow : Med Priority</p>
                    <p>Red : High Priority</p>
                    <p></p>
                    <button onClick={filterThrough}> - Filter Card - </button>
                    <p></p>
                    {counter == 0 && (
                        <>
                            <TileItem item={t[0]} />
                            <TileItem item={t[1]} />
                            <TileItem item={t[2]} />
                        </>
                    )}
                    {counter == 1 && <TileItem item={t[0]} />}
                    {counter == 2 && <TileItem item={t[1]} />}
                    {counter == 3 && <TileItem item={t[2]} />}
                </div>
            }
        </div>
    );
}
