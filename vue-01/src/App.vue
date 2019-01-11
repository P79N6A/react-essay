<template>
 <div>
     <add-todo></add-todo>
     <todo-list :todos="todos"></todo-list>
     <todo-footer></todo-footer>
 </div>
</template>
<script>
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
      todos: [
          {
              text: '01',
              completed: false,
          },
          {
              text: '02',
              completed: true,
          }
      ]
  };
 },
 methods: {
 }
}
</script>
<style>
</style>