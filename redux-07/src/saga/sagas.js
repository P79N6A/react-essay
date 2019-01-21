import { takeLatest, call, put } from 'redux-saga/effects'
import { getTodos } from '../services.js'
import { setLoading, initTodos } from './common'

function* initTodo () {
    yield put(setLoading(true))
    try {
        const data = yield call(getTodos)
        yield put(initTodos(data.list))
        yield put(setLoading(false))
    } catch(e) {
        yield put(setLoading(false))
    }
}

function* rootSaga() {
    yield takeLatest('INIT_TODOS_SAGA', initTodo)
}

export default rootSaga