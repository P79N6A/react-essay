
const promise = (store) => (next) => (action) => {
    if (typeof action.then === 'function') {
        action.then((data) => {
            if (Array.isArray(data)) {
                data.forEach(item => {
                    store.dispatch(item)
                })
            } else {
                store.dispatch(data)
            }
        }, (err) => {
            store.dispatch(err)
        })
    } else {
        next(action)
    }
}


export default promise