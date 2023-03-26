import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CoursesView from '../views/CoursesView.vue';
import CourseOverviewView from '../views/CourseOverviewView.vue';
import LogInView from '../views/LogInView.vue';
import Chapter1View from '../views/just_an_act/Chapter1View.vue';
import Chapter2View from '../views/just_an_act/Chapter2View.vue';
import EscapeRoomView from '../views/EscapeRoomView.vue';
import testRouteView from '../views/testRouteView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/courses',
      name: 'courses',
      component: CoursesView,
    },
    {
      path: '/cooverview',
      name: 'course',
      component: CourseOverviewView,
    },
    {
      path: '/sign',
      name: 'login',
      component: LogInView,
    },
    {
      path: '/chapter1',
      name: 'chapter 1',
      component: Chapter1View,
    },
    {
      path: '/chapter2',
      name: 'chapter 2',
      component: Chapter2View,
    },
    {
      path: '/escaperoom',
      name: 'escaperoom',
      component: EscapeRoomView,
    },
    {
      path: '/testRoute',
      name: 'testRoute',
      component: testRouteView,
    },
  ],
});

export default router;
