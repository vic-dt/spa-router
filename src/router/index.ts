import DomusPagina from "@/modulorum/landing/paginae/DomusPagina.vue";
import NotFound404 from "@/modulorum/ordinarius/NotFound404.vue";

import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            name: 'landing',
            component: ()=> import ('@/modulorum/landing/layouts/LandingLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: DomusPagina,
                },
                {
                    path: '/features',
                    name: 'features',
                    component: () => import('@/modulorum/landing/paginae/PeculiaritatesPagina.vue'),
                },
                {
                    path: '/pricing',
                    name: 'pricing',
                    component: () => import('@/modulorum/landing/paginae/PretiumPagina.vue'),
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/modulorum/landing/paginae/ContactusPagina.vue'),
                },
                {
                    path: '/pokemon/:id',
                    name: 'pokemon',
                    props: (route)=>{
                        const id = Number(route.params.id);

                        return isNaN(id) ?{ id: 1} : {id:id}
                    },
                    component: () => import('@/modulorum/pokemons/paginae/PokemonPagina.vue'),
                },
            ]
        },
        
        {
            path: '/auth',
            component: () => import('@/modulorum/auth/layouts/AuthLayout.vue'),
            redirect: {name:'login'},
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/modulorum/auth/paginae/LoginPagina.vue')
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import('@/modulorum/auth/paginae/RegisterPagina.vue')
                }
            ]
        },

        {
            path:'/:pathMatch(.*)*',
            // redirect: '/',
            component: NotFound404
        }
    ]
});

export default router;