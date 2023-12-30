<template>
    <div>
        <div v-if="loading" class="cotainer mt-5">
           <div class="row justify-content-center">
               <div class="spinner-border" role="status">
               </div>
            </div>
        </div>
        <div v-else class="container mt-5">
            <create-task></create-task>
            <filter-task></filter-task>
            <div class="row g-3">
               <div v-for="task in tasks" :key="task.id" class="col-md-4">
                   <div class="card" :class="{'bg-light': task.completed}">
                       <div class="card-body d-flex justify-content-between align-item-center">
                           <div>
                               <del v-if="task.completed">{{ task.title }}</del>
                               <div v-else>{{ task.title }}</div>
                            </div>
                            <div class="d-flex justify-content-between align-item-center">
                            <update-task :task="task"></update-task>
                            <delete-task :taskid="task.id"></delete-task>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue'
import FilterTask from '../components/Tasks/FilterTask.vue'
import CreateTask from '../components/Tasks/CreateTask.vue'
import UpdateTask from '../components/Tasks/UpdateTask.vue'
import DeleteTask from '../components/Tasks/DeleteTask.vue'

export default {
   components:{
    FilterTask, CreateTask, UpdateTask, DeleteTask
},

  setup() {
    
    const store = useStore()
    const loading = ref(false);
    
    async function fetchtasks() {
       loading.value = true
       await store.dispatch('task/fetchtasks')
       loading.value = false
    }
    
    fetchtasks()
    const tasks = computed(()=> store.getters['task/alltasks'])
    return {tasks,loading}
  },
}
</script>