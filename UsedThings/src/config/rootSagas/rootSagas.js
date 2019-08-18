import { all } from 'redux-saga/effects';
import { watchIncrement, watchDecrement } from '../../view/screenA/saga/saga';

export default function* rootSaga() {
    yield all([
        watchIncrement(),
        watchDecrement()
    ]);
}