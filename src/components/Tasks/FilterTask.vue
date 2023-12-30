<template>
   <div class="row ">
      <div class="col-md-2 mb-4">
         <h6>Filter Tasks:</h6>
         <select class="form-select" v-model="number" @change="filterTasks">
           <option selected>Select the number of task</option>
           <option value="5">5</option>
           <option value="10">10</option>
           <option value="20">20</option>
           <option value="50">50</option>
         </select>
      </div>
   </div>
</template>

 <script> 
 import { useStore } from 'vuex'
 import { ref } from 'vue'
export default {
   setup() {

   const store = useStore()
   const number = ref()

   function filterTasks() {
      store.dispatch('task/filterTasks',number.value)
   }
   return { filterTasks, number }
  }
}
 </script>