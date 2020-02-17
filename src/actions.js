
// Actions best practice #2: constants
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

// Actions best practice #1: action creator functions
export function actionIncrement() {
    return ({
        type: 'INCREMENT',
    })
}

export function actionDecrement() {
    return ({
        type: 'DECREMENT',
    })
}

export function actionReset() {
    return ({
        type: 'RESET',
    })
}




// export function actionColorChange(count) {
//    return ({
//        type: 'CHANGECOLOR',
//        count = [...state],
//     if (count % 2 === O) {
//         console.log('state is even')
//     } else  {
//         console.log('state is odd')
//         }
    // // return () => {
    //     // let className = 'color-change';
    //     if (count % 2 === O) {
    //         // className += 'change-to-red'
    //         console.log('state is even')
    //     } else  {
    //         // className += 'change-to-green'
    //         console.log('state is odd')
    //     // return <h1 className={className}>{count}</h1>
    // }
// }


