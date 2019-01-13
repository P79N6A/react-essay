<template>
 <span>
     &nbsp;&nbsp;
    <span v-if="active">{{linkItem.text}}</span>
    <a v-else href="javascript:void(0)" @click="handleClick()">
        {{linkItem.text}}
    </a>
 </span>
</template>
<script>
export default {
 components: {
 },
 props: {
     linkItem: Object,
     active: Boolean,
 },
 data () {
  return  {
  };
 },
 methods: {
     handleClick () {
         this.$store.commit('setVisibilityFilter', {
             filter: this.linkItem.value
         })
     }
 }
}
</script>
<style>
</style>