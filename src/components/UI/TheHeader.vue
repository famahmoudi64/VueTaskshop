<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm mt-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">KianRayaneh</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" href="navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" href="/"  to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" href="#" to="/Tasks">Tasks</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" href="#" to="/products">Products</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link p-1 me-3" to="/cart">
              <span class="badge bg-primary rounded-pill me-1">{{count}}</span>
              <i class="bi bi-basket-fill" style="font-size:23px"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
 import { computed } from 'vue'
 import { useStore } from 'vuex'
 export default {
  setup() {
    const store = useStore()
    const count = computed(() => store.getters['cart/count'])
    return { count }
  }
 }
 
</script>
<style>
.router-link-active {
    color:rgba(0,0,0,0.9);
    border-bottom:2px solid rgba(0,0,0,0.9)
}
</style>