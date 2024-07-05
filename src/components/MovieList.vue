<template>
  <div>
    <div v-for="movie in movies" :key="movie.id">
      <router-link :to="`/movie/${movie.id}`">
        <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movies'],
};
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
}
div > div {
  margin: 1rem;
  text-align: center;
}
img {
  width: 100px;
  height: auto;
}
h3{
  text-decoration: none;
  color:chocolate
}
a{
  text-decoration: none;
}
</style>



