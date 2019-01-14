<template>
 <ul>
     <todo v-for="todo, index in todos" :key="index" :index="index" :todo="todo"></todo>
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