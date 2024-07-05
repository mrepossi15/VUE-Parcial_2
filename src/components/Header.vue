<template>
  <header>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/favorites">Favoritos</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
}
a {
  color: white;
  text-decoration: none;
}
</style>

