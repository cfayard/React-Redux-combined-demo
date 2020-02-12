/*
- count
- handleIncrement
- handleDecrement
- handleReset
*/

import React from 'react';

export default function Counter({
    count,
    handleIncrement,
    handleDecrement,
    handleReset
}) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>-</button>
            {count}
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>🏳</button>
        </div>
    )
}

