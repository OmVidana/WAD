import React, { useState } from "react";

function TaskList() {
    let [taskComplete, setTaskComplete] = useState(false);
    let [elementCount, setElementCount] = useState(1);
    function changeStatus() {
        setTaskComplete(!taskComplete);
    }

    function addItem() {
        setElementCount(elementCount+1);
    }

    function removeItem() {
        setElementCount(elementCount-1);
    }


    return(
        <div>
            <ul>
                <li style={taskComplete ? {textDecoration:'line-through'} : null }>
                    <span onClick={changeStatus}>{elementCount} Buy Milk</span>
                    <button onClick={addItem}>+</button>
                    <button onClick={removeItem}>-</button>
                </li>
            </ul>
        </div>
    );
}

export default TaskList;