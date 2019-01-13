<template>
    <li :style="{'text-decoration': todo.completed ? 'line-through' : 'none'}"
        @click="handleClick()"
    >
        {{todo && todo.text || 'text'}}
    </li>
</template>
<script>
export default {
 components: {
 },
 props: {
     index: Number,
     todo: Object,
 },
 data () {
  return  {
  };
 },
 methods: {
     handleClick() {
         this.$store.commit('toggleTodo', {
             index: this.index,
         })
     }
 }
}
</script>
<style>
</style>