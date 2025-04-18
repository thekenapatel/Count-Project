//Project 1: Count(increase, decrease, reset)
import React, { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    function decrease() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    function increase() {
        setCount(count + 1);
    }

    return (
        <div className="count-container">
            <h1>{count}</h1>
            <div className="all-buttons">
                <button className="button" onClick={decrease}>-</button>
                <button className="reset-button button" onClick={reset}>Reset</button>
                <button className="button" onClick={increase}>+</button>
            </div>
        </div>
    )
}


export default App

