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
import { mapGetters } from 'vuex'
import FooterLink from './FooterLink.vue'
export default {
 components: {
     FooterLink
 },
 computed: {
    ...mapGetters(['visibilityFilter'])
 },
 data () {
  return  {
      links: [
     {
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
 methods: {
 }
}
</script>
<style>
</style>