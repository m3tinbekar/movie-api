import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue";
import SelectedMovie from "../components/MovieTasks/SelectedMovie.vue"
import Popular from "../components/MovieTasks/Popular.vue"
import NowPlaying from "../components/MovieTasks/NowPlaying.vue"
import UpComing from "../components/MovieTasks/UpComing.vue"
import TopRated from "../components/MovieTasks/TopRated.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/movie",
    name: "Movie",
    component: Movie,

  },
  {
    path: "/movie/:id",
    name: "SelectedMovie",
    component: SelectedMovie
  },
  {
    path: "/movies/popular",
    name: "Popular",
    component: Popular,
  },
  {
    path: "/movies/now_playing",
    name: "NowPlaying",
    component: NowPlaying,
  },
  {
    path: "/movies/up_coming",
    name: "UpComing",
    component: UpComing,
  },
  {
    path: "/movies/top_rated",
    name: "TopRated",
    component: TopRated,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
