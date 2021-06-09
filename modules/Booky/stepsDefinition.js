export default {
  SelectCategories: {
    component: () => import('./components/SelectCategories'),
    action: 'booky/setSelectedCategories',
  },
  SelectBooks: {
    component: () => import('./components/SelectBooks'),
    action: 'booky/setSelectedBooks',
  },
  Results: {
    component: () => import('./components/Results'),
  },
};
