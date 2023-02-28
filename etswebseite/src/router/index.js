import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CoursesView from '../views/CoursesView.vue';
import CourseOverviewView from '../views/CourseOverviewView.vue';
import LogInView from '../views/LogInView.vue';
import LectionView from '../views/LectionView.vue';
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
      path: '/chapter',
      name: 'chapter',
      component: LectionView,
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
