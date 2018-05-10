import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AddContact from './pages/AddContact.vue'
import Contacts from './pages/Contacts.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [

    { path:'/' ,redirect: '/contacts'},
    { path:'/contacts' ,component: Contacts , name:'contacts-list'},
    { path:'/edit/:id' ,component: AddContact , name:'edit'},
    { path: '/contact/:id', component: Contacts, name: 'contact-details'},
    { path:'/add-contact' ,component: AddContact},


]


const router = new VueRouter({
    routes,
    mode:'history'
});


new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
