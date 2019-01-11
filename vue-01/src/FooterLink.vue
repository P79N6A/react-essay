<template>
 <span>
     &nbsp;&nbsp;
    <span v-if="active">{{text}}</span>
    <a v-else href="javascript:void(0)" @click="handleClick()">
        {{text}}
    </a>
 </span>
</template>
<script>
export default {
 components: {
 },
 props: {
     text: String,
     active: Boolean,
 },
 data () {
  return  {
  };
 },
 methods: {
     handleClick () {
         this.$emit('event-set-filter', this.text)
     }
 }
}
</script>
<style>
</style>