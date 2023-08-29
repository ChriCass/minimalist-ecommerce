<template>
  <nav class="navbar sticky-top bg-white fixed p-5 shadow-sm">
    <div class="container-fluid">

      <router-link class="navbar-brand" to="/">
        <img
          src="@/assets/logo_japanese.png"
          alt="Logo"
          width="60"
          height="60"
          class="d-inline-block align-text-top"
        />
      </router-link>
      <!-- Menú visible en modo escritorio -->
      <div class="d-none d-lg-flex">
        <ul class="navbar-nav horizontal">
          <li class="nav-item">
            <router-link to="/categories" class="nav-link text-black fs-5" href="#">Categories</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/categories" class="nav-link text-black fs-5" href="#">Product Page</router-link>
          </li>
        </ul>
      </div>

      <!-- Buttons on the right -->
      <div class="d-flex ms-auto">
        <!-- Button for the offcanvas menu -->
        <button
          class="navbar-toggler no-border me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler no-border"
            ><i class="fa-solid text-black fa-cart-shopping"></i
          >
        </span>
        </button>

        <!-- Button for the collapsible menu (visible only in mobile) -->
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse d-lg-none" id="navbarNavDropdown">
        <ul class="navbar-nav mt-3">
          <li class="nav-item mb-3">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>

      <!-- Offcanvas content -->
      <div
        class="offcanvas offcanvas-end shadow"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title fw-bolder" id="offcanvasNavbarLabel">
            YourShoppingCart(0)
          </h5>
          <button
            type="button"
            class="btn-close fw-bold"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div 
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <p class="text-center">Nothing here</p>
            <button data-bs-dismiss="offcanvas" class="btn btn-dark">
              Keep Searching
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
