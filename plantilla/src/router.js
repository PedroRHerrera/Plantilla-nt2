import { createRouter, createWebHistory } from 'vue-router'

import Ingreso from './componentes/Ingreso.vue'
import Respuestas from './componentes/Respuestas.vue'


const routes = [
    { path: '/', redirect: '/ingreso' },
    { path: '/ingreso', component: Ingreso },
    { path: '/respuestas', component: Respuestas },

    { path: '/:pathmatch(.*)*', redirect: '/ingreso' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router