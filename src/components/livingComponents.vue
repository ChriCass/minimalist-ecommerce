<template>
    <section class="container mt-5">
      <div class="row">
        <div class="col-md-6 bg px-0 d-none d-md-block">
            <img src="../assets/minimal.jpeg" class="img-fluid" alt="" />
        </div>
        <div
          class="col-12 p-5 col-md-6 bg-secondary d-flex justify-content-center flex-column align-items-start"
        >
          <div class="box_title">
            <h2>Creative Harmonious Living</h2>
          </div>
          <div class="box_description">
            <p>
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
          </div>
          <div class="button-container">
            <router-link class="btn btn-dark fw-bold" to="/categories">SHOP NOW</router-link>
          </div>
        </div>
  
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .button-container {
    max-width: fit-content;
    width: 100%;
  }
  
  .bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  @media (min-width: 1400px) {
    .bg img {
      height: 400px; 
    }
  }
  
  </style>
  