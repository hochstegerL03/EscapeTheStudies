import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CoursesView from '../views/CoursesView.vue';
import CourseOverviewView from '../views/CourseOverviewView.vue';

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
  ],
});

export default router;
