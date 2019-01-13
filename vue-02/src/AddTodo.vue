<template>
 <div>
  <input type="text" v-model="text" />
  <button type="button" @click="handleAddTodo()">Add</button>
</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      text: '',
    };
  },
  methods: {
    handleAddTodo () {
      this.$store.commit('addTodo', {
        text: this.text,
      })
      this.text = ''
    }
  }
};
</script>
<style>
</style>