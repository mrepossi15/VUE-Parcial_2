<template>
  <div>
    <Header />
    <h2>Favoritos</h2>
    <MovieList :movies="favorites" />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MovieList from '../components/MovieList.vue';

export default {
  components: { Header, MovieList },
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    };
  },
};
</script>


