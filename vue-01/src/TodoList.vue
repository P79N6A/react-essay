<template>
 <ul>
     <todo v-for="todo in todos" :todo="todo"></todo>
 </ul>
</template>
<script>
import Todo from './Todo.vue'
export default {
 components: {
     Todo
 },
 props: {
     todos: Array,
 },
 data () {
  return  {
  };
 },
 methods: {
 }
}
</script>
<style>
</style>