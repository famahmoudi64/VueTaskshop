<template>
  <div  class="container mt-5">
    <div class="row mt-5">
      <div v-if="cartItems.length == 0" class="mt-20 text-center col-md-12">
        <i class="bi bi-basket-fill mt-20" style="font-size:100px"></i>
        <p>cart is empty</p>
        <router-link to="/products" class="btn btn-outline-success">products</router-link>
      </div>
      <div v-else class="col-lg-12 pl-3 pt-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">product</th>
              <th scope="col">price</th>
              <th scope="col" style="width:10%">Quantity</th>
              <th scope="col">subtotal</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.img">
              <td class="align-middle">
                <div class="row">
                  <div class="col-lg-2">
                    <img :src="item.img" class="img-fluid">
                  </div>
                  <div class="col-lg-10">
                    <p>{{ item.name }}</p>
                    {{ item.description }}
                  </div>
                </div>
              </td>
              <td class="align-middle">
                {{ item.price }}
              </td>
              <td class="align-middle">
                <button @click="increment(item.id)" class="btn btn-sm btn-dark me-2">+</button>
                <span>{{ item.Quantity }}</span>
                <button @click="decrement(item.id)" class="btn btn-sm btn-dark ms-2">-</button>
              </td>
              <td  class="align-middle">{{ item.price * item.Quantity }}</td>
              <td class="align-middle">
                <button class="btn btn-danger" @click="deleteitem(item.id)">Delete</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td   class="align-middle">
                <a href="#" class="btn btn-dark  me-0" @click="clearAll">clearCart</a>
              </td>
              <td colspan="2" class="hidden-xs"></td>
              <td class="hidden-xs text-center">total: {{ totalAmount }}</td>
              <td>
              <a  href="#" class="btn btn-success">checkOut</a>
              </td>
            </tr>
          </tfoot>
        </table>
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

  function increment(id) {
    store.dispatch('cart/increment', id)
  }

  function decrement(id) {
    store.dispatch('cart/decrement', id)
  }

  function deleteitem(id) {
    store.dispatch('cart/deleteitem',id)
  }

  function clearAll(){
    store.dispatch('cart/clearAll')
  }

  const cartItems = computed(()=> store.getters['cart/cartItems'])

  const totalAmount = computed(() => store.getters['cart/totalAmount'])

  return { cartItems, increment, clearAll, decrement, deleteitem, totalAmount }
  }
}
</script>