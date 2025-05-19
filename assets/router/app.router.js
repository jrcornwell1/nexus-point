import { createRouter, createWebHistory } from 'vue-router';
import { ROUTE } from '../const/index.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '_root',
      redirect: { name: ROUTE.SEARCH_RESULTS },
    },
    {
      path: '/app',
      name: ROUTE.$_APP,
      component: () => import('../components/AppFrame.vue'),
      children: [
        {
          path: '',
          name: ROUTE.$_PRIMARY_LAYOUT,
          component: () => import('../components/AppFramePage.vue'),
          children: [
            {
              path: 'search-results',
              name: ROUTE.$_APP_SEARCH_RESULTS,
              children: [
                {
                  path: '',
                  name: ROUTE.SEARCH_RESULTS,
                  components: {
                    content: () => import('../components/ViewAppVehicleSearchResults.vue'),
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export const initRouter = (pinia) => {
  /**
   * Do things before navigation has resolved
   */
  router.beforeResolve(async (to, from) => {
    const isHardRefresh = typeof from.name === 'undefined';

    /**
     * Only run these if it's a hard page load
     */
    if (isHardRefresh) {
    }
  });

  return router;
};

export default router;
