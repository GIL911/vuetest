import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home1";
import About from "./views/About";
import Board from "./views/Board";
import Typography from "./views/Typography";
import ContentDetail from './views/ContentDetail';
import product from './views/ProductlList';
import login from './views/SignIn';
//import test from './views/test';

Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/add",
      component: About
    },
    {
      path: "/typography",
      component: Typography
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "/product",
      component: product
    },
    {
      path: "/test",
      component: ()=> import('@/views/test')
    },
    {
      path: "/board",
      nme:'Board',
      component: Board
    },
    {
      path: '/board/detail/:contentId',
      name: 'ContentDetail',
      component: ContentDetail
    },
  ]
});

export default router;