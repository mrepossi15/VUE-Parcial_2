<template>
  <div>
    <Header />
    <div v-if="movie">
      <h1>{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
      <p>{{ movie.overview }}</p>
      <p><strong>Año de lanzamiento:</strong> {{ movie.release_date }}</p>
      <p><strong>Género:</strong> <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</span></p>
      <button @click="addToFavorites" :disabled="isInFavorites">Agregar a favoritos</button>
      <p v-if="isInFavorites">Esta película ya está en tus favoritos.</p>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: { Header },
  data() {
    return {
      movie: null,
      isInFavorites: false,
    };
  },
  mounted() {
    this.fetchMovieDetails();
  },
  methods: {
    async fetchMovieDetails() {
      const movieId = this.$route.params.id;
      const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c990a9832cbaa64c7e41518243f2ec95`;

      try {
        const response = await fetch(endPoint);
        const json = await response.json();
        console.log(json);
        this.movie = json;
        this.checkIsInFavorites();
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    },
    checkIsInFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const movieId = this.movie.id;
      this.isInFavorites = favorites.includes(movieId);
    },
    addToFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const movieId = this.movie.id;

      if (favorites.includes(movieId)) {
        this.isInFavorites = true;
        return; // Exit early if movie is already in favorites
      }

      favorites.push(movieId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      this.isInFavorites = true;
      alert('Película agregada a favoritos!');
    },
  },
};
</script>
<style scoped>
h1{
  color: chocolate;
}
</style>
