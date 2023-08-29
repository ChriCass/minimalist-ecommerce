<template>
    <section class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-5">
          <router-link class="link-home" to="/">← Home</router-link>
        </div>
        <div class="col-7">
          <h2>categories</h2>
        </div>
        <div class="col-12 mt-5 d-flex justify-content-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-light mx-3"
              :class="{ active: selectedCategory === 'categories-all' }"
              @click="goToCategory('categories-all')"
            >
              All
            </button>
            <button
              type="button"
              class="btn mx-3 btn-light"
              :class="{ active: selectedCategory === 'categories-electronics' }"
              @click="goToCategory('categories-electronics')"
            >
              Electronics
            </button>
            <button
              type="button"
              class="btn mx-3 btn-light"
              :class="{ active: selectedCategory === 'categories-clothesmen' }"
              @click="goToCategory('categories-clothesmen')"
            >
              Clothes for Men
            </button>
            <button
              type="button"
              class="btn mx-3 btn-light"
              :class="{ active: selectedCategory === 'categories-clotheswomen' }"
              @click="goToCategory('categories-clotheswomen')"
            >
              Clothes for Women
            </button>
            <button
              type="button"
              class="btn mx-3 btn-light"
              :class="{ active: selectedCategory === 'categories-jewelry' }"
              @click="goToCategory('categories-jewelry')"
            >
              Jewelry
            </button>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </section>
  </template>
  
  <script>
  import navbarComponent from "./navbarComponent.vue";
  
  export default {
    components: {
      navbarComponent,
    },
    data() {
      return {
        selectedCategory: "categories-all", // Inicialmente selecciona "All"
      };
    },
    methods: {
      goToCategory(category) {
        this.selectedCategory = category; // Actualiza la categoría seleccionada
        this.$router.push({ name: category }); // Proporciona el nombre de ruta completo
      },
    },
  };
  </script>
  
  <style scoped>
  .link-home {
    color: black;
    text-decoration: none;
  }
  
  .btn.active {
    background-color: #f8f9fa; /* Cambia el color de fondo para el botón activo */
  }
  </style>
  