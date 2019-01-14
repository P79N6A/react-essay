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
import { setVisibilityFilter } from './store/actions'
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
         this.$store.dispatch(setVisibilityFilter(this.linkItem.value))
     }
 }
}
</script>
<style>
</style>