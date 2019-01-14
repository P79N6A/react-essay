<template>
 <div>
  <input type="text" v-model="text"/>
  <button type="button" @click="handleClick()">Add</button>
</div>
</template>
<script>
import { addTodo } from './store/actions'
export default {
  components: {},
  data() {
    return {
      text: '',
    };
  },
  methods: {
    handleClick(){
      this.$store.dispatch(addTodo(this.text))
      this.text = ''
    }
  }
};
</script>
<style>
</style>