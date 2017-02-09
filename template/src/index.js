import Vue from 'vue';
import VueRouter from 'vue-router';
import Loading from './components/Loading';
import OrderList from './pages/OrderList';
import OrderDetail from './pages/OrderDetail';

const routes = [
    { path: '/list', component: OrderList },
    { path: '/detail', component: OrderDetail }
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

var app = new Vue({
    el: '#app',

    router: router,

    data: {
    },

    components: {
        "loading": Loading
    },

    methods: {

    }
});
