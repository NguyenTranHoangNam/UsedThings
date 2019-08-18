
//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { takeEvery,put } from 'redux-saga/effects'; 
import { INCREMENT, DECREMENT, INCREMENT_SUCCESS, DECREMENT_SUCCESS } from '../action/actionTypes/actionTypes';

function* increment() {
    yield put({type:INCREMENT_SUCCESS,step:1})
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment);
}

function* decrement() {
    yield put({type:DECREMENT_SUCCESS,step:1})
}

export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement);
}