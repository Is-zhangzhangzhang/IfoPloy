import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import context from '@/components/modal/event';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/context',
            name: 'context',
            component: context
        }
    ]
});
