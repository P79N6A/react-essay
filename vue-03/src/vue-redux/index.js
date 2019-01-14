
const vueRedux = {}
vueRedux.install = (Vue) => {
    Vue.mixin({
        mounted: reduxMixins
    })
}

function reduxMixins() {
    if (this.$root.$options.store) {
        this.dispatch = (action) => {
            // todo 
        }
        console.log('@@@222', this.mapReduxState)
        initFillProperty.call(this)
    }
}

function initFillProperty() {
    console.log('@@@', this.mapReduxState)
    if (!this.mapReduxState || typeof this.mapReduxState !== 'function') {
        return
    }
    const store = this.$root.$options.store
    const state = this.mapReduxState(store.getState())
    for (const property in state) {
        this.$set(this, property, state[property])
    }
}

export default vueRedux