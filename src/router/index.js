import {createRouter, createWebHistory} from "vue-router";
import AccessContentComponent from "../iam/components/access-view/access-content.component.vue";
import ReportsViewComponent from "../analytics/components/reports-view/reports-view.component.vue";
import NotificationsContentComponent from "../interaction/components/notifications-content.component.vue";
import CompanyPage from "../profiles/pages/company-page.vue";
import SubscriptionsContentComponent from "../payment/pages/subscriptions-content.component.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: SubscriptionsContentComponent, meta: { title: 'Login'}},
        { path: '/dashboard', component: ReportsViewComponent, meta: { title: 'Reports'}},

        // { path: '/tutorials', component: TutorialManagementComponent, meta: { title: 'Tutorials' } },
        // { path: '/about', component: AboutComponent, meta: { title: 'About us'}},
    ]
});

export default router;