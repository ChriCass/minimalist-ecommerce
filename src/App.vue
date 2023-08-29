<template>
  <div>
    <navbarComponent></navbarComponent>
    <router-view></router-view>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import footerComponent from './components/footerComponent.vue';
import navbarComponent from './components/navbarComponent.vue';
export default {
  components:{
    footerComponent,
    navbarComponent
  }
};
</script>