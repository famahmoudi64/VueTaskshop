<template>
    <div>
        <i class="bi bi-trash3-fill ms-3" @click="deleteTask(taskid)"></i>
        <div class="spinner-border spinner-border-sm" role="status" v-if="Loading">
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
    props:['taskid'],
    
    setup(props) {
        const store = useStore()
        const Loading = ref(false)

        async function deleteTask() {
            Loading.value = true
            await store.dispatch('task/deleteTask',props.taskid)
                Loading.value = false
        }
         return{ deleteTask, Loading }
    }
}

</script>