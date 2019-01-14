<template>
 <p>
     Show:
     <footer-link 
     v-for="linkItem, index in links" :key="index" 
     :linkItem="linkItem" 
     :active="visibilityFilter===linkItem.value"></footer-link>
 </p>
</template>
<script>
import Vue from 'vue'
import FooterLink from './FooterLink.vue'
export default {
 components: {
     FooterLink
 },
 data () {
  return  {
      links: [{
          text: 'ALL',
          value: 'SHOW_ALL',
      }, 
      {
        text: 'Active',
        value: 'SHOW_ACTIVE',
      }, {
          text: 'Completed',
        value: 'SHOW_COMPLETED',
      }]
  };
 },
 computed: {
     visibilityFilter () {
         const state = this.$store.state
         return state.visibilityFilter
     }
 },
 methods: {
 }
}
</script>
<style>
</style>