<template>
  <categoriesComponent></categoriesComponent>
  <ProductsComponent></ProductsComponent>
  <creativeStaticComponent></creativeStaticComponent>
  <productsSliderComponent></productsSliderComponent>
  <livingComponents></livingComponents>


</template>
<script>
import categoriesComponent from '@/components/categoriesComponent.vue';
import navbarComponentVue from '@/components/navbarComponent.vue';
import ProductsComponent from './ProductsComponent.vue';
import creativeStaticComponent from './creativeStaticComponent.vue';
import productsSliderComponent from './productsSliderComponent.vue';
import livingComponents from './livingComponents.vue';
import footerComponentVue from './footerComponent.vue';
export default {
    components:{
        navbarComponentVue,
        categoriesComponent,
        ProductsComponent,
        creativeStaticComponent,
        livingComponents,
        footerComponentVue,
        productsSliderComponent
    }
}
</script>

<style>

</style>