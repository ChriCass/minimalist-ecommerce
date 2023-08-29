<template>
    <div class="col-12 col-sm-6 mt-5 col-md-4 col-lg-3 mb-3" v-for="p in limitedProducts" :key="p.id">
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
    </div>
</template>

<script>
import axios from "axios";
export default {
data() {
  return {
    limitedProducts: [],
  };
},
methods: {
  async getLimitedProducts() {
    const api = "https://fakestoreapi.com/products/category/jewelery";
    try {
      const response = await axios.get(api);
      const data = response.data;
      this.limitedProducts = data;
    } catch (error) {
      console.error("No se obtuvieron datos. Error:", error);
    }
  },
},
mounted() {
  this.getLimitedProducts();
},
};
</script>

<style scoped>
.img-width {
width: 100%;
}

.container {
margin-top: 5rem;
}

.box_image {
height: 288px;
padding: 20px;
}

img {
object-fit: contain;
height: 15rem;
width: 15rem;
}

.card {
display: flex;
flex-direction: column;
height: 100%; /* Ocupar la altura máxima disponible */
transition: border-color 0.3s ease-in-out; /* Transición para el cambio de borde */
}

.card:hover {
border-color: black !important;
cursor: pointer;
}

.box_title {
padding: 0.5rem;
overflow: hidden;
word-wrap: break-word; /* Permitir que las palabras se dividan en líneas */
}

.box_price {
flex: none; /* No se expandirá más allá de su contenido */
padding: 0.5rem;
}
</style>