
import axios from "axios";
import Swal from "sweetalert2"

const task = {
  namespaced:true,
  state: {
    tasks:[],
    isLoading :false  
  },

  getters: {
    alltasks(state) {
    return state.tasks
    }
  },

  mutations: {
    settasks(state,tasks) {
    state.tasks = tasks
    },

    createtask(state,newtask) {
    state.tasks.unshift(newtask)
    },

    updateTask(state,updatetask){
      const index = state.tasks.findIndex(task => task.id == updatetask.id)
      if (index != -1){
        state.tasks.splice(index,1,updatetask)
      }
    },

    deleteTask(state,taskid){
      state.tasks = state.tasks.filter(task => task.id != taskid)
    }
  },

  actions: {
    async fetchtasks({commit}){
      try {
        const response = await  axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('settasks',response.data)         
      }
      catch(error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async filterTasks({commit},limit){
      console.log(commit,limit)
      try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
            //  console.log(response.data)
            commit('settasks',response.data)
          } catch(error) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            }
    },

    async createtask({commit},newtask) {
      try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
              title:newtask,
              completed:false,
            })
              console.log(response,commit)
              commit('createtask',response.data)
                Swal.fire ({
                  icon: 'success',
                  title:'task added',
                  showConfirmButton:'ok',
                  timerProgressBar:true,
                  timer: 1500,
                  toast:true,
                  position:'top'
                })
          } catch(error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text:'you have a problem',
                showConfirmButton: 'ok',
                timer: 1500
              })
            }
    },

    async updateTask({commit},task){
      try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`,{
              id: task.id,
              title: task.title,
              completed: !task.completed
            })
            commit('updateTask',response.data)
            Swal.fire({
            icon: 'success',
            title:'task edited',
            showConfirmButton:'ok',
            timerProgressBar:true,
            timer: 1500,
            toast:true,
            position:'top'
            })
          } catch(error) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            }
    },

    async  deleteTask({commit},taskid){
      try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskid}`)
            commit('deleteTask',taskid)
            Swal.fire({
              icon: 'success',
              title:'task deleted',
              showConfirmButton:'ok',
              timerProgressBar:true,
              timer: 1500,
              toast:true,
              position:'top'
            })
          } catch(error) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            }
    }
  }
}
export default task