import VueRouter from 'vue-router';
import Home from '@/components/Home';
import PersonalArea from '@/components/PersonalArea';
import Profile from '@/components/PersonalArea/Profile';
import Accounts from '@/components/PersonalArea/Accounts';
import Subscriptions from '@/components/PersonalArea/subscriptions';
import Emoney from '@/components/PersonalArea/Emoney';
import Journal from '@/components/PersonalArea/journal';
import Authorization from '@/components/PersonalArea/Authorization';
import Registration from '@/components/PersonalArea/Registration';
import TarifsEditor from '@/components/PersonalArea/AdminPanel/tarifsEditor';

// import AuthGuard from './auth-guard.js';






export default new VueRouter ({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '',
            component: Home
        },
        {
            name: 'Userroom',
            path: '/personalarea',
            component: PersonalArea,
            children: [
                {
                    name: 'Profile',
                    path: '/personalarea/profile',
                    component: Profile,
                    // beforeEnter: AuthGuard
                },
                {
                    name: 'Accounts',
                    path: '/personalarea/accounts',
                    component: Accounts,
                    // beforeEnter: AuthGuard
                },
                {
                    name: 'Subscriptions',
                    path: '/personalarea/subscriptions',
                    component: Subscriptions,
                    // beforeEnter: AuthGuard
                },
                {
                    name: 'Emoney',
                    path: '/personalarea/emoney',
                    component: Emoney,
                    // beforeEnter: AuthGuard
                },
                {
                    name: 'Journal',
                    path: '/personalarea/journal',
                    component: Journal,
                    // beforeEnter: AuthGuard
                },
                {
                    name: 'Authorization',
                    path: '/personalarea/authorization',
                    component: Authorization,
                    // beforeEnter: AuthGuard
                },
                {
                    name: 'Registration',
                    path: '/personalarea/registration',
                    component: Registration,
                    // beforeEnter: AuthGuard
                },
                {
                    name: 'TarifsEditor',
                    path: '/personalarea/tarifseditor',
                    component: TarifsEditor,
                    // beforeEnter: AuthGuard
                }
                
            ]
        }
    ]
});