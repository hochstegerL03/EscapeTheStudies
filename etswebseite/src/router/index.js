import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CoursesView from '../views/CoursesView.vue';
import CourseOverviewView from '../views/CourseOverviewView.vue';
import ChapterSelectionView from '../views/ChapterSelectionView.vue';
import LogInView from '../views/LogInView.vue';
import EscapeRoomView from '../views/EscapeRoomView.vue';
import testRouteView from '../views/testRouteView.vue';
import ChapterView from '../views/ChapterView.vue';

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
      children: [
        {
          path: '',
          name: 'chapteroverview',
          component: ChapterSelectionView,
          props: true,
        },
        {
          path: ':id',
          name: 'chapter',
          component: ChapterView,
          props: true,
        },
      ],
    },
    {
      path: '/sign',
      name: 'login',
      component: LogInView,
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
