<template>
  <section class="container mt-5">
    <div class="row" v-if="Product">
      <div class="col-12 d-flex justify-content-center">
        <h5 class="fw-bolder">{{ Product.title }}</h5>
      </div>
      <div class="col-12 col-md-6 bg p-5 d-flex justify-content-center">
        <img class="zoom-image" :src="Product.image" alt="Product Image" />
      </div>
      <div class="col-12 col-lg-6 bg-secondary px-5 pb-5 custom-padding">
        <p class="">{{ Product.description }}</p>
        <div class="row justify-content-center mt-5">
          <div class="col-4">
            <h3>quantity</h3>
          </div>
          <div class="col-4 d-flex justify-content-center">
            <div class="counter">
              <button
                class="fw-bold"
                :disabled="counter === 1"
                @click="decrementCounter"
              >
                -
              </button>
              <span>{{ counter }}</span>
              <button
                class="fw-bold"
                :disabled="counter > 99"
                @click="incrementCounter"
              >
                +
              </button>
            </div>
          </div>
          <div class="col-4">
            <h3>${{ dinamicPrice }}</h3>
          </div>
          <div class="col-12 mt-5 d-flex justify-content-around">
            <button class="btn px-5 btn-outline-dark fw-bold fs-5">
              ADD TO CART
            </button>
            <button class="btn btn-danger fw-bold fs-5 px-5">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
    <productsSliderComponent></productsSliderComponent>
  </section>
</template>

<script>
import productsSliderComponent from "./productsSliderComponent.vue";
import axios from "axios";

export default {
  components: {
    productsSliderComponent,
  },
  data() {
    return {
      Product: null,
      counter: 1,
      dinamicPrice: "",
    };
  },
  methods: {
    async getProductDetails() {
      const api = `https://fakestoreapi.com/products/${this.$route.params.id}`;
      try {
        const response = await axios.get(api);
        const data = response.data;
        this.Product = data;
        this.dinamicPrice = this.Product.price;
      } catch (error) {
        console.error("No se obtuvieron datos. Error:", error);
      }
    },
    incrementCounter() {
      this.counter++;
      const numberValue = parseFloat(this.dinamicPrice);
      this.dinamicPrice = this.counter * numberValue;
    },
    decrementCounter() {
      if (this.counter > 0) {
        this.counter--;
        const numberValue = parseFloat(this.dinamicPrice);
        this.dinamicPrice = numberValue / (this.counter + 1); // Corrección aquí
      }
    },
  },
  mounted() {
    this.getProductDetails();
  },
};
</script>

<style scoped>
.bg img {
  height: 450px;
  object-fit: contain;
  width: 100%;
}

p {
  margin: 0;
  line-height: 1.5rem !important;
}

h5 {
  position: relative;
  top: 43px;
}

.counter {
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid black;
}

.counter button {
  font-size: 1rem;
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 1rem;
}

.counter span.counter-value {
  margin: 0 1rem;
  height: 5rem;
  outline-offset: -2px;
  padding-top: 10px;
  text-align: center;
  width: 6rem;
}

.custom-padding {
  padding-top: 3rem;
}

@media (min-width: 1200px) {
  .custom-padding {
    padding-top: 5rem !important; /* Aplicamos el padding a partir de 1200px */
  }
}

.counter button:hover {
  background-color: #ddd;
}
</style>
