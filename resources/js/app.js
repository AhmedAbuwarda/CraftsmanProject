/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import StarRating from 'vue-star-rating'
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('star-rating',StarRating);
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('listItem', require('./components/listItem.vue').default);
// Vue.component('test2', require('./components/test2.vue').default);
// Vue.component('list', require('./components/list.vue').default);
// Vue.component('tasks', require('./components/tasks.vue').default);
// Vue.component('task', require('./components/task.vue').default);
// Vue.component('message', require('./components/message.vue').default);
// Vue.component('modal', require('./components/modal.vue').default);
// Vue.component('tabs', require('./components/tabs.vue').default);
// Vue.component('tab', require('./components/tab.vue').default);
// Vue.component('coupon', require('./components/coupon.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data:{
        showModal:true,
        applied:false
    },
    methods:{
        onCouponApplied(){
            this.applied=true;
        }
    }
});
