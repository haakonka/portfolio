import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import InterestsView from '../views/InterestsView.vue'
import SkillsView from '../views/SkillsView'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/interests',
    name: 'interests',
    component: InterestsView
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
