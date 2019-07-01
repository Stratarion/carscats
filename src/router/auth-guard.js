import store from '../store'

export default function (to, from, next) {
    if (store.getters.isUserLogIn) {
        // console.log(to)
        // if (to.path === '/personalarea/authorization' || to.path === '/personalarea/registration') {
        //     // next('/personalarea/accounts')  
        // } else
        next() 
    } else {
        next('/personalarea/authorization?loginError=true')
    }
}