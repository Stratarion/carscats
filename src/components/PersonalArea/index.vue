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
                <router-link class="lk-body-menu-link" to="">Профиль</router-link>
                <router-link class="lk-body-menu-link" to="">Мои доступы</router-link>
                <router-link class="lk-body-menu-link" to="">Подписки</router-link>
                <router-link class="lk-body-menu-link" to="">Безнал</router-link>
                <router-link class="lk-body-menu-link" to="">Журнал</router-link>
                <router-link class="lk-body-menu-link" to="">Выход</router-link>
            </div>







        </section>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    
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
        border-radius: 50%;
        border: 1px solid red;
    }
    .lk-body-menu {
        background: #fff;
        display: flex;
        justify-content: flex-start;
    }
    .lk-body-menu-link {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        text-decoration: none;
        color: black;


    }
    .lk-body-menu-link:hover {
        background: #eaeaea !important;
    }
</style>