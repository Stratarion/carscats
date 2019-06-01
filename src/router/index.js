import VueRouter from 'vue-router';
import Home from '@/components/Home';
import PersonalArea from '@/components/PersonalArea';

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
                
            ]
        }
    ]
});