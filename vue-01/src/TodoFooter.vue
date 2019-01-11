<template>
 <p>
     Show:
     <footer-link v-for="text in links" :text="text" :active="filter===text"></footer-link>
 </p>
</template>
<script>
import FooterLink from './FooterLink.vue'
export default {
 components: {
     FooterLink
 },
 props: {
     filter: {
         type: String,
         default: 'ALL'
     }
 },
 data () {
  return  {
      links: ['ALL', 'Active', 'Completed']
  };
 },
 methods: {
 }
}
</script>
<style>
</style>