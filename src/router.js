import { createRouter, createWebHistory } from 'vue-router';
import { h } from 'vue';

import Layout from '../src/shared/presentation/components/layout.vue';

const createDummyView = (title) => ({
    name: title,
    render() {
        return h('div', { class: 'dummy-view' }, [
            h('h1', { style: 'font-size: 1.5rem; font-weight: bold; color: #1e293b; margin-bottom: 1rem;' }, title),
            h('p', { style: 'color: #64748b;' }, `Aquí irá el contenido del componente de ${title}.`)
        ]);
    }
});

const routes = [
    {
        path: '/',
        redirect: '/layout/dashboard'
    },
    {
        path: '/layout',
        component: Layout,
        children: [
            { path: 'dashboard', component: createDummyView('Dashboard') },
            { path: 'inventory', component: createDummyView('Inventario') },
            { path: 'recipes', component: createDummyView('Recetas') },
            { path: 'prediction', component: createDummyView('Predicción') },
            { path: 'recommendations', component: createDummyView('Recomendaciones') },
            { path: 'alerts', component: createDummyView('Alertas') },
            { path: 'iot', component: createDummyView('Monitoreo IoT') },
            { path: 'roles', component: createDummyView('Gestión de Roles') },
            { path: 'plans', component: createDummyView('Planes de Suscripción') },
            { path: 'notifications', component: createDummyView('Notificaciones') },
        ]
    },
    {
        path: '/iam/sign-in',
        component: createDummyView('Login / Sign In (Layout independiente)')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;