
import React from 'react';

export default function Counter({
    count,
    handleIncrement,
    handleDecrement,
    handleReset
}) {
    changeColor(count)
    console.log(h1)
    return (
        <div>
            
            <h1 style={h1}>{count}</h1>
            <button onClick={handleDecrement} onChange={changeColor}>-</button> 
            <button onClick={handleIncrement} onChange={changeColor} >+</button>
            <button onClick={handleReset}>🏳</button>
        </div>
    )

}

let h1 = {
    color: ''
}
function changeColor(count) {
    // console.log(count)
    if (count %  10 ===0 ) {
        h1 = {color: 'red'}
    } else if (count % 2 ===0) {
        h1 = {color: 'pink'}
    }
     else {
        h1 = {color: 'blue'}
    }
}






