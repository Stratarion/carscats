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
                    component: Profile
                },
                {
                    name: 'Accounts',
                    path: '/personalarea/accounts',
                    component: Accounts
                },
                {
                    name: 'Subscriptions',
                    path: '/personalarea/subscriptions',
                    component: Subscriptions
                },
                {
                    name: 'Emoney',
                    path: '/personalarea/emoney',
                    component: Emoney
                },
                {
                    name: 'Journal',
                    path: '/personalarea/journal',
                    component: Journal
                },
                {
                    name: 'Authorization',
                    path: '/personalarea/authorization',
                    component: Authorization
                },
                {
                    name: 'Registration',
                    path: '/personalarea/registration',
                    component: Registration
                }
                
            ]
        }
    ]
});