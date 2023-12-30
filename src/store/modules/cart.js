import Swal from "sweetalert2"

function updateLocalStorage(cart) {
  localStorage.setItem('cart',JSON.stringify(cart))
}
const cart = {
    namespaced : true,

    state: {
      cart:localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[],
    },
    getters: {
      cartItems(state) {
      return state.cart
    },
      totalAmount(state) {
        return state.cart.reduce((total,p)=> {
          return total + (p.price * p.Quantity)
        },0)
      },
      count(state) {
        return  state.cart.length
      }
    },

    mutations: {
      addToCart(state,product) {
        const item = state.cart.find(p => p.id == product.id)
        if(!item) {
          state.cart.push({
            ...product,
            Quantity:1
          })
        } else {
                item.Quantity++
          }
          console.log(state.cart)
          updateLocalStorage(state.cart)  
          // localStorage.setItem('cart',JSON.stringify(state.cart))  
      },
        increment(state,id) {
          const item = state.cart.find(p => p.id == id)
          if(item) {
            item.Quantity++
          }
          updateLocalStorage(state.cart)  
        //    localStorage.setItem('cart',JSON.stringify(state.cart))  
        },
        decrement(state,id) {
          const item = state.cart.find(p => p.id == id)
          item.Quantity = item.Quantity - 1
        },
        deleteitem(state,id) {
          state.cart = state.cart.filter(p => p.id != id)
          updateLocalStorage(state.cart)
        //  localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        clearAll(state) {
          state.cart=[]
          updateLocalStorage(state.cart)
            // localStorage.setItem('cart',JSON.stringify(state.cart))
        }
    },

    actions: {
        addToCart({commit},product) {
          commit('addToCart',product)
          Swal.fire({
            icon: 'success',
            title:'you product added',
            showConfirmButton:'ok',
            timerProgressBar:true,
            timer: 1500,
            toast:true,
            position:'top'
          })
        },
      increment({commit},id) {
        commit('increment',id)
      },
      decrement({commit},id) {
        commit('decrement',id)
      },
      deleteitem({commit},id) {
        commit('deleteitem',id)
          Swal.fire ({
            icon: 'warning',
            title:'product is deleted',
            showConfirmButton:'ok',
            timerProgressBar:true,
            timer: 1500,
            toast:true,
            position:'top'
          })
       },
      clearAll({commit}) {
        commit('clearAll')
      }
    },
}
export default cart