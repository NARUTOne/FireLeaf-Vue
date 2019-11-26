import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = () => import(/* webpackChunkName: "home" */ "./views/Home/index.vue");
const App = () => import(/* webpackChunkName: "app" */ "./views/App/index.vue");
const About = () => import(/* webpackChunkName: "about" */ "./views/About/index.vue");
const Articles = () => import(/* webpackChunkName: "articles" */ "./views/Articles/index.vue");
const Log = () => import(/* webpackChunkName: "log" */ "./views/Log/index.vue");
const Project = () => import(/* webpackChunkName: "project" */ "./views/Project/index.vue");
const TimeLine = () => import(/* webpackChunkName: "timeline" */ "./views/TimeLine/index.vue");
const NotFound = () => import(/* webpackChunkName: "404" */ "./views/NotFound/index.vue");

const viewRouter =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home
    },
    {
      path: "/blog",
      name: "app",
      component: App,
      redirect: '/blog/log',
      children: [
        {
          path: "articles",
          name: "articles",
          component: Articles,
        },
        {
          path: "project",
          name: "project",
          component: Project,
        },
        {
          path: "log",
          name: "log",
          component: Log,
        },
        {
          path: "timeLine",
          name: "timeLine",
          component: TimeLine,
        },
        {
          path: "about",
          name: "about",
          component: About,
        },
      ]
    },
    { // 404 置后
      path: '404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    },
  ]
});

viewRouter.beforeEach((to, from, next) => { next(); });
viewRouter.afterEach(() => {});

export default viewRouter;