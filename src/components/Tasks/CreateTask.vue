<template>
    <div class="row">
       <div class="col-md-12 mb-5">
            <h4>Create Tasks:</h4>
            <form class="row" @submit.prevent="createtask">
                <div class="col-md-6">
                    <input type="text" class="form-control" v-model="newtask">
                    <div v-if="warning" :style="{color:'red'}">you have to enter a new task!</div>
                </div>
                <div class="col-auto">
                    <button class="btn btn-dark" type="submit">
                        <div v-if="isLoading" class="spinner-border spinner-border-sm" role="status">
                        </div>
                    create
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {

    setup(){
        const newtask = ref()
        const warning = ref(false)
        const store = useStore()
        const isLoading = ref(false)

         async function createtask() {
            if (newtask.value === ''){
                warning.value = true
            } else {
                isLoading.value = true
                warning.value = false
                await store.dispatch('task/createtask',newtask.value)
                isLoading.value = false
                newtask.value =  ''
            }
        }
        // const isLoading = computed(()=> store.getters.isloading)
        return{ newtask, warning, createtask, isLoading }
    }
}
</script>

<style scoped>

</style>