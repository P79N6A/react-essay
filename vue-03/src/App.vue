<template>
 <div>
     <add-todo></add-todo>
     <p v-if="loading">loading...</p>
     <todo-list :todos="todos"></todo-list>
     <todo-footer></todo-footer>
 </div>
</template>
<script>
import AddTodo from './AddTodo.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './store/reducers'
import { dispatchInitTodos } from './store/actions'
export default {
 components: {
     AddTodo,
     TodoList,
     TodoFooter,
 },
 data () {
  return  {};
 },
 computed: {
     todos () {
         const {state} = this.$store
         const { todos, visibilityFilter } = state
         if (visibilityFilter === SHOW_ALL) {
            return this.$store.state.todos
         }
         return this.$store.state.todos.filter((todo) => {
             return visibilityFilter === SHOW_ACTIVE ? !todo.completed : todo.completed
         })
     },
     loading () {
         return this.$store.state.loading
     }
 },
 mounted () {
     this.$store.dispatch(dispatchInitTodos())
 },
 methods: {
 }
}
</script>
<style>
</style>