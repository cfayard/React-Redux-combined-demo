// Our ideal/default state is just a number:
// 0
// -1

import {
    INCREMENT,
    DECREMENT,
    RESET
} from './actions'

export function count(state=0, action) {
    let newState = state;
    switch(action.type) {
        case INCREMENT:
            newState += 1;
            break;
        case DECREMENT:
            return state -= 1;
            break;
        case RESET:
            newState=0;
            break;
        defalut:
            break;
    }
    return newState;
}