
const vueRedux = {}
vueRedux.install = (Vue, { store }) => {
    // 将redux的state放置到一个vue的实例中，
    // 每当更新vue实例的state，就能利用vue的特性来触发组件中依赖了state的属性进行更新
    store._vm = new Vue({
        data: {
          state: store.getState()
        },
        created () {
            this.init()
        },
        methods: {
            init () {
                // redux状态变化
                store.subscribe(() => {
                    this.state = store.getState()
                })
            }
        }
    })
    // 使用mixin为每一个组件都添加$store属性，以获取store的state和方法
    Vue.mixin({
        beforeCreate: function () {
            this.$store = store._vm
            this.$store.dispatch = (action) => {
                store.dispatch(action)
            }
        }
    })
}

export default vueRedux