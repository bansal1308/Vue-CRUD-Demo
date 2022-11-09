import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../components/Signin.vue'
import Register from '../components/Register.vue'
import Default from '../layouts/default.vue'

const defaultchildRoutes = (prop, mode = false) => [
    {
      path: '',
      name: prop + '.dashboard',
      meta: { auth: true, name: 'dashboard' },
      component: () => import('../views/main/dashboard.vue')
    }
    // User Pages
    /*{
      path: 'UserAdd',
      name: prop + '.UserAdd',
      meta: { auth: true, name: 'UserAdd' },
      component: () => import('../views/pages/Users/UserAdd')
    },
    {
      path: 'UserList',
      name: prop + '.UserList',
      meta: { auth: true, name: 'UserList' },
      component: () => import('../views/pages/Users/UserList')
    },
    {
      path: 'UserProfile',
      name: prop + '.UserProfile',
      meta: { auth: true, name: 'User Profile' },
      component: () => import('../views/pages/Users/UserProfile')
    },
    {
      path: 'UserPrivacySetting',
      name: prop + '.UserPrivacySetting',
      meta: { auth: true, name: 'UserPrivacySetting' },
      component: () => import('../views/pages/Users/UserPrivacySetting')
    },
    // Special Pages
    {
      path: 'billing',
      name: prop + '.billing',
      meta: { auth: true, name: 'Billing' },
      component: () => import('../views/pages/Special Pages/Billing')
    },
    {
      path: 'calender',
      name: prop + '.calender',
      meta: { auth: true, name: 'Calender' },
      component: () => import('../views/pages/Special Pages/Calender')
    },
    {
      path: 'kanban',
      name: prop + '.kanban',
      meta: { auth: true, name: 'Kanban' },
      component: () => import('../views/pages/Special Pages/kanban')
    },
    {
      path: 'Pricing',
      name: prop + '.Pricing',
      meta: { auth: true, name: 'Pricing' },
      component: () => import('../views/pages/Special Pages/Pricing')
    },
    {
      path: 'timeline',
      name: prop + '.timeline',
      meta: { auth: true, name: 'TimeLine' },
      component: () => import('../views/pages/Special Pages/Timeline')
    },
    {
      path: 'admin',
      name: prop + '.admin',
      meta: { auth: true, name: 'admin' },
      component: () => import('../views/pages/admin')
    },
    // Widget pages
    {
      path: 'widgetbasic',
      name: prop + '.widgetbasic',
      meta: { auth: true, name: 'Widget Basic' },
      component: () => import('../views/Elements/widget/WidgetBasic')
    },
    {
      path: 'widgetcard',
      name: prop + '.widgetcard',
      meta: { auth: true, name: 'Widget Card' },
      component: () => import('../views/Elements/widget/WidgetCard')
    },
    {
      path: 'widgetchart',
      name: prop + '.widgetchart',
      meta: { auth: true, name: 'Widget Chart' },
      component: () => import('../views/Elements/widget/WidgetChart')
    },
    // Form pages
    {
      path: 'elements',
      name: prop + '.elements',
      meta: { auth: true, name: 'Elements' },
      component: () => import('../views/Elements/Form/Elements')
    },
    {
      path: 'validation',
      name: prop + '.validation',
      meta: { auth: true, name: 'validation' },
      component: () => import('../views/Elements/Form/Validation')
    },
    {
      path: 'wizard',
      name: prop + '.wizard',
      meta: { auth: true, name: 'Wizard' },
      component: () => import('../views/Elements/Form/Wizard')
    },
    // Icons pages
    {
      path: 'dualtone',
      name: prop + '.dualtone',
      meta: { auth: true, name: 'Dual Tone' },
      component: () => import('../views/Elements/Icons/DualTone')
    },
    {
      path: 'outlined',
      name: prop + '.outlined',
      meta: { auth: true, name: 'Outlined' },
      component: () => import('../views/Elements/Icons/Outlined')
    },
    {
      path: 'solid',
      name: prop + '.solid',
      meta: { auth: true, name: 'Solid' },
      component: () => import('../views/Elements/Icons/Solid')
    },
    // Maps pages
    {
      path: 'google',
      name: prop + '.google',
      meta: { auth: true, name: 'Google' },
      component: () => import('../views/Elements/Maps/Google')
    },
    {
      path: 'vector',
      name: prop + '.vector',
      meta: { auth: true, name: 'Vector' },
      component: () => import('../views/Elements/Maps/Vector')
    },
    // Table pages
    {
      path: 'bootstrap-table',
      name: prop + '.bootstraptable',
      meta: { auth: true, name: 'Bootstrap Table' },
      component: () => import('../views/Elements/Table/BootstrapTable')
    },
    {
      path: 'datatable',
      name: prop + '.datatable',
      meta: { auth: true, name: 'Datatable' },
      component: () => import('../views/Elements/Table/Datatable')
    },
    // Footer Pages
    {
      path: 'privacypolicy',
      name: prop + '.privacypolicy',
      meta: { auth: true, name: 'privacypolicy' },
      component: () => import('../views/Elements/Extra/PrivacyPolicy')
    },
    {
      path: 'termsofservice',
      name: prop + '.termsofservice',
      meta: { auth: true, name: 'TermsOfService' },
      component: () => import('../views/Elements/Extra/TermsOfService')
    }*/
]

const routes = [
    // {
    //     path: '/signin',
    //     name: prop + '.signin',
    //     meta: { auth: true, name: 'SignIn' },
    //     component: () => import('../views/pages/Authentication/SignIn')
    // },
    // {
    //     path: '/',
    //     name: 'SignIn',
    //     component: Signin
    // },
    {
        path: '/signin',
        name: 'SignIn',
        component: Signin
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/default',
        name: 'Default',
        //component: () => import('../layouts/default.vue'),
        component: Default,
        children: defaultchildRoutes('default')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
  });

router.beforeEach((to, from) => {
    const loggedIn = localStorage.getItem('user');
    const publicPages = ['/signin', '/register'];
    const authRequired = !publicPages.includes(to.path);
    console.log(to.name);
    if (authRequired && !loggedIn) {
        // next({ name: 'SignIn' })
        return { name: 'SignIn' }
    }
});

export default router;
