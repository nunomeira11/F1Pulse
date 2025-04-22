import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import StandingsView from '../views/StandingsView.vue'
import LiveView from '../views/LiveView.vue'
import PilotStatsView from '../views/PilotStatsView.vue'
import RaceStatsView from '../views/RaceStatsView.vue'
import ConstructorStatsView from '../views/ConstructorStatsView.vue'
import PerfilView from '../views/PerfilView.vue'
import CalendarView from '../views/CalendarView.vue'
import GuideFlagView from '../views/GuideFlagView.vue'
import GuideTireView from '../views/GuideTireView.vue'

import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/standings',
      name: 'standings',
      component: StandingsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/live',
      name: 'live',
      component: LiveView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/pilotstats',
      name: 'pilotstats',
      component: PilotStatsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/racestats',
      name: 'racestats',
      component: RaceStatsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/constructorstats',
      name: 'constructorstats',
      component: ConstructorStatsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/perfil',
      name: 'perfil',
      component: PerfilView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/calendar',
      name: 'calendar',
      component: CalendarView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/guide-flags',
      name: 'guide-flags',
      component: GuideFlagView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/guide-tires',
      name: 'guide-tires',
      component: GuideTireView,
      meta: { requiresAuth: true },
    },

  
  ]
});
//** Parte onde é verificado se ja efetuou login */
router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !useUserStore().isUser) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
});

export default router
