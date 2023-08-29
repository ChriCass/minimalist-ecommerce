import { createRouter, createWebHashHistory } from 'vue-router';
import minimalPage from '@/components/minimalPage.vue';
import allCatengoriesComponentVue from '@/components/allCatengoriesComponent.vue';
import justAllComponent from '@/components/productsCategories/justAllComponent.vue';
import electronicsComponentVue from '@/components/productsCategories/electronicsComponent.vue';
import womenComponentVue from '@/components/productsCategories/womenComponent.vue';
import menComponentVue from '@/components/productsCategories/menComponent.vue';
import jewelryComponentVue from '@/components/productsCategories/jeweltryComponent.vue';
import singleProductComponentVue from  '@/components/singleProductComponent.vue';
const routes = [
  {
    path: '/',
    name: 'minimalPage',
    component: minimalPage
  },
  {
    path: '/categories',
    name: 'categories',
    component: allCatengoriesComponentVue,
    children: [
      { path: '', name: 'categories-all', component: justAllComponent },
      { path: 'electronics', name: 'categories-electronics', component: electronicsComponentVue },
      { path: 'clothesmen', name: 'categories-clothesmen', component: menComponentVue },
      { path: 'clotheswomen', name: 'categories-clotheswomen', component: womenComponentVue },
      { path: 'jewelry', name: 'categories-jewelry', component: jewelryComponentVue },
    ]
  }, 
  {
    path: '/:id',
    name: 'single-product',
    component: singleProductComponentVue
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
