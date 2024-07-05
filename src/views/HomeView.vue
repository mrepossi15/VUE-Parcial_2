<template>
  <div>
    <Header />
    <SearchBar @search="searchMovies" />
    <div v-if="searchResults.length">
      <h2>Resultados de búsqueda</h2>
      <MovieList :movies="searchResults" />
    </div>
    <div v-else>
      <h2>Películas Populares</h2>
      <MovieList :movies="popularMovies" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import SearchBar from '../components/SearchBar.vue';
import MovieList from '../components/MovieList.vue';

export default {
  components: { Header, SearchBar, MovieList },
  data() {
    return {
      popularMovies: [],
      searchResults: [],
    };
  },
  methods: {
    async fetchPopularMovies() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c990a9832cbaa64c7e41518243f2ec95`);
        const data = await response.json();
        this.popularMovies = data.results;
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    },
    async searchMovies(query) {
      if (query) {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=c990a9832cbaa64c7e41518243f2ec95`);
          const data = await response.json();
          this.searchResults = data.results;
        } catch (error) {
          console.error('Error searching movies:', error);
        }
      } else {
        this.searchResults = [];
      }
    },
  },
  mounted() {
    this.fetchPopularMovies();
  },
};
</script>


