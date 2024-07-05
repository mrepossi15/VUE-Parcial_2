<template>
  <div>
    <input type="text" v-model="query" @input="onInput" placeholder="Buscar películas..." />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('search', this.query);
    },
  },
};
</script>

<style scoped>
div{
  display: flex;
}
input {
  width: 100%;
  padding: 1rem;
  margin: 2rem;
  background-color: rgb(236, 205, 194);
 
}
</style>



