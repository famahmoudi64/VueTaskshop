<template>
    <div>
       <i class="bi bi-check-all"  v-if="task.completed" @click="updateTask(task)"></i>
       <i class="bi bi-check" v-else  @click="updateTask(task)"> </i> 
       <div v-if="Loading" class="spinner-border spinner-border-sm" role="status"></div>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
export default{
    props:['task'],
    setup() {
        const store = useStore()
        const Loading = ref(false)

    async function updateTask(task){
        Loading.value = true
        await store.dispatch('task/updateTask',task)
        Loading.value = false
    }
        return{ updateTask, Loading }
    }
}
</script>