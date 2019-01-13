<template>
 <div>
     <add-todo></add-todo>
     <todo-list :todos="todos"></todo-list>
     <todo-footer></todo-footer>
 </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddTodo from './AddTodo.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'
export default {
 components: {
     AddTodo,
     TodoList,
     TodoFooter,
 },
 data () {
  return  {
  };
 },
 computed: {
     ...mapGetters(['todos'])
 },
 mounted () {
     this.$store.dispatch('initTodos')
 },
 methods: {
 }
}
</script>
<style>
</style>