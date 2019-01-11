<template>
    <li :style="{'text-decoration': todo.completed ? 'line-through' : 'none'}">
        {{todo && todo.text || 'text'}}
    </li>
</template>
<script>
export default {
 components: {
 },
 props: {
     todo: Object,
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