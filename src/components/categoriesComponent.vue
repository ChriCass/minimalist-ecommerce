<template>
  <main class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-6 p-3">
        <div @click="navigateToCategory('clotheswomen')" class="image-container">
          <img src="@/assets/clothegirl.jpeg" class="img-fluid" alt="" />
          <div class="image-overlay">
            <span class="category-name fs-2">women's clothing</span>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3 p-3">
        <div @click="navigateToCategory('clothesmen')" class="image-container height-custom">
          <img src="@/assets/clothemen.jpeg" class="img-fluid height-custom" alt="" />
          <div class="image-overlay">
            <span class="category-name fs-2">men's clothing</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="row">
          <div @click="navigateToCategory('electronics')" class="col-6 col-md-12 p-3">
            <div class="image-container">
              <img src="@/assets/elect.png" class="img-fluid" alt="" />
              <div class="image-overlay">
                <span class="category-name fs-2">electronics</span>
              </div>
            </div>
          </div>
          <div @click="navigateToCategory('jewelry')" class="col-6 col-md-12 p-3">
            <div class="image-container">
              <img src="@/assets/jeweltry.jpeg" class="img-fluid" alt="" />
              <div class="image-overlay">
                <span class="category-name fs-2">jewelery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    navigateToCategory(category) {
      this.$router.push({ name: `categories-${category}` });
    },
  },
};
</script>

<style>
.height-custom {
  height: 100% !important;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.image-container img {
  transition: transform 0.3s ease-in-out;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  opacity: 1;
  cursor: pointer;
}

.category-name {
  color: white;
  font-size: 1.5rem;
  text-align: left;
  margin: 0;
}

.image-container:hover img {
  transform: scale(1.05);
  cursor: pointer;
}

.image-container:not(:hover) img {
  filter: brightness(70%);
}
</style>
