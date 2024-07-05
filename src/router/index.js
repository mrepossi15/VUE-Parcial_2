import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MovieDetails from '../views/MovieDetails.vue';
import FavoritesView from '../views/FavoritesView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/movie/:id', name: 'movie-details', component: MovieDetails },
  { path: '/favorites', name: 'favorites', component: FavoritesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
