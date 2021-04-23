import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("@/views/home/home")
const Cart = () => import('@/views/cart/cart.vue')
const Category = () => import("@/views/category/category.vue")
const Profile = () => import("@/views/profile/profile.vue")


const routes = [
  {
    path: "",
    redirect: "/home"

  },
  {
    path: "/home",
    component: Home,

  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
