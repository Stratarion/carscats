<template>
    <div class="lk">
        <section class="top">
            <router-link tag="div" class="logo" to="/">
                <img src="https://carscats.ru/bitrix/templates/new_lk/assets/media/img/logo/logo.png" alt="">
            </router-link>
            <h2>Личный кабинет</h2>
        </section>

        <section class="lk-body">
            <div class="lk-body-menu">
                <router-link class="lk-body-menu-link" to="/personalarea/profile">Профиль</router-link>
                <router-link class="lk-body-menu-link" to="/personalarea/accounts">Мои доступы</router-link>
                <router-link class="lk-body-menu-link" to="/personalarea/subscriptions">Подписки</router-link>
                <router-link class="lk-body-menu-link" to="/personalarea/emoney">Безнал</router-link>
                <router-link class="lk-body-menu-link" to="/personalarea/journal">Журнал</router-link>
                <button class="lk-body-menu-link" to="">Выход</button>
            </div>  
            <div class="lk-body-main">
                <div class="lk-body-main-left">
                    <!-- Инфо о пользователе -->
                    <user-info></user-info>
                </div>
                <div class="lk-body-main-right">
                    <router-view></router-view>
                </div>

            </div>







        </section>
        
    </div>
</template>

<script>

import UserInfo from './UserInfo'
    export default {
        components: {
            UserInfo,
        }
    }
</script>

<style scoped>
    * {
        color: #575962;
    }
    
    .lk {
        background-image: url(https://carscats.ru/bitrix/templates/new_lk/assets/media/img/bg/8.jpg);
        background-repeat: repeat;
        background-size: auto;
        min-height: 100vh;

    }
    .top {
        display: flex;  
        justify-content: space-between;  
        align-items: center;
        color: #fff;
        padding: 30px 50px;


    }
    .lk-body {
        width: 90%;
        margin: 0 auto;

    }
    .lk-body-menu {
        background: #fff;
        display: flex;
        padding: 0 25px;
        justify-content: flex-start;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;

    }
    .lk-body-menu-link {
        height: 50px;
        display: flex;
        background: none;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        text-decoration: none;
        color: black;
        border: none;


    }
    .lk-body-menu-link:hover {
        background: #eaeaea !important;
    }
    .lk-body-main {
        background-color: #ebedf2;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        height: 70vh;
        padding: 30px 0 ;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: auto;

    }
    .lk-body-main-left, .lk-body-main-right {
        background: #fff;
        /* flex-grow: 1;   */
        margin: 0 20px;
        min-width: 300px;

    }
    .lk-body-main-left {
        width: 20%;
    }
    .lk-body-main-right {
        width: 70%;
    }
</style>