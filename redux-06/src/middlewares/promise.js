
const promise = (store) => (next) => (action) => {
    // 抽取一个dispatch的方法
    // 支持派发多个actions
    const dispatchInnerAction = (data) => {
        if (Array.isArray(data)) {
            data.forEach(item => {
                store.dispatch(item)
            })
        } else {
            store.dispatch(data)
        }
    }
    if (typeof action.then === 'function') {
        action.then((data) => {
            dispatchInnerAction(data)
        }, (err) => {
            dispatchInnerAction(err)
        })
    } else {
        next(action)
    }
}


export default promise