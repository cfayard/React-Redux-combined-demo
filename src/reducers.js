
import { 
    INCREMENT, 
    DECREMENT, 
    RESET
} from "./actions";

export function count(state=6, action) {
    let newState = state;
    switch (action.type) {
        case INCREMENT:
            // increment!
            newState += 1
            // if (newState % 2 ===0 ) {
            //     console.log('state is even')
            // } else if (newState % 10 === 0) {
            //     console.log('state is divisible by 10')
            // } else {
            //     console.log('state is odd')
            // }
            break;
        case DECREMENT:
            // decrement
            newState -= 1;
            break;
        case RESET:
            // reset to 0
            newState = 0;
            break;
        // case CHANGECOLOR:
            // CHANGECOLOR
        //    return [...state],
        default:
            break;        
    }
    return newState;
}