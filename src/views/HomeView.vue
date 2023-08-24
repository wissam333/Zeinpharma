<template>
  <div>
    <MainSlider></MainSlider>
    <WhoWeAre></WhoWeAre>
    <ProductsSlider></ProductsSlider>
    <div class="logo-background">
      <LatestNews></LatestNews>
    </div>
    <div class="container">
      <hr>
    </div>
    <AppFooter></AppFooter>

  </div>
</template>

<script setup>
import MainSlider from '../components/Home/MainSlider.vue';
import WhoWeAre from '../components/Home/WhoWeAre.vue';
import ProductsSlider from '../components/Products/ProductsSlider.vue';
import LatestNews from "../components/Home/LatestNews.vue"
import AppFooter from '../components/golbal/AppFooter.vue';
</script>

<style lang="scss" scoped>
</style> 

