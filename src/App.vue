<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from './components/golbal/AppNavbar.vue';
</script>

<template>
  <div class="app">
    <AppNavbar></AppNavbar>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app {
  height: 10000px;
}
</style>
