<template>
    <div class="container">
        <h3 class="mb-4">Trending Now</h3>
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="p in limitedProducts" :key="p.id">
          <!-- Product Card Starts -->
          <div class="card h-100">
            <div class="box_image">
              <img :src="p.image" class="card-img-top img-width" alt="..." />
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <div class="box_title">
                <p class="card-text">{{ p.title }}</p>
              </div>
              <div class="box_price">
                <h5 class="card-title">$ {{ p.price }}</h5>
              </div>
            </div>
          </div>
          <!-- Product Card Ends -->
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  import axios from "axios";
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'ProductCarousel',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
      limitedProducts: [],
      // carousel settings
      settings: {
        itemsToShow: 2 ,
        snapAlign: 'center',
      },
      // breakpoints are mobile first
      breakpoints: {
        700: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      },
    }),
    methods: {
      async getLimitedProducts() {
        const api = "https://fakestoreapi.com/products?limit=8";
        try {
          const response = await axios.get(api);
          this.limitedProducts = response.data;
        } catch (error) {
          console.error("No se obtuvieron datos. Error:", error);
        }
      },
    },
    mounted() {
      this.getLimitedProducts();
    },
  })
  </script>
  

  <style scoped>
  .img-width {
    width: 100%;
  }

  .container {
    margin-top: 5rem;
  }

  .box_image {
    height: 190px;  /* ajusta este valor según el contenido de tu tarjeta */
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    object-fit: contain;
    max-height: 100%;
    width: auto;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 292.8px;
    width: 219.4px;
    transition: border-color 0.3s ease-in-out;
  }

  .card:hover {
  border-color: black !important;
  cursor: pointer;
}


  .box_title {
    padding: 0.5rem;
    overflow: hidden;
    word-wrap: break-word;
  }

  .box_price {
    flex: none;
    padding: 0.5rem;
  }



 
</style>
