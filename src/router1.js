import { createRouter, createWebHistory } from "vue-router";
import TheHome from './pages/TheHome.vue'
import TaskIndex from './pages/MyTasks.vue'
import TheProducts from './pages/TheProducts.vue'
import CartIndex from './pages/CartIndex.vue'
const routes = [
    {path:'/', name:'Home', component:TheHome},
    {path:'/tasks', name:'tasks', component:TaskIndex},
    {path:'/products', name:'products', component:TheProducts},
    {path:'/cart', name:'cart', component:CartIndex}
]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router;


