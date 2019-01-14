<template>
    <li :style="{'text-decoration': todo.completed ? 'line-through' : 'none'}"
        @click="handleClick()"
    >
        {{todo && todo.text || 'text'}}
    </li>
</template>
<script>
import { toggleTodo } from './store/actions'
export default {
 components: {
 },
 props: {
     todo: Object,
     index: Number,
 },
 data () {
  return  {
  };
 },
 methods: {
     handleClick () {
         this.$store.dispatch(toggleTodo(this.index))
     }
 }
}
</script>
<style>
</style>