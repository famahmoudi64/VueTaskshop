<template>
  <div>
    <div class="container mt-5">
      <div class="row g-3">
        <div v-for="product in products" :key="product.id" class="col-md-3">
          <div class="card">
            <img  class="card-img-top" :src="product.img">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <button class="btn btn-outline-success btn-sm" @click="addToCart(product)">Add To Cart</button>
              <span>{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {

  setup() {
    const store = useStore()

    const products = computed(()=> store.getters['product/allproducts'])

    function addToCart(product) {
      store.dispatch('cart/addToCart',product)
    }
    return { products,addToCart }
  }
}
</script>
