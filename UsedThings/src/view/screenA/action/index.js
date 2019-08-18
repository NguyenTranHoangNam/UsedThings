import { INCREMENT, DECREMENT } from "./actionTypes/actionTypes";

export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
}

// Giảm với giá trị step
export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
}
