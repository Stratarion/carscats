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
                <!-- <router-link to="/personalarea/profile"> -->
                    <span v-if="userStatus"  class="lk-body-menu-link" @click="changeTab(0)">Профиль</span> 
                <!-- </router-link> -->
                <!-- <router-link v-if="userStatus" class="lk-body-menu-link" to="/personalarea/accounts"> -->
                    <span v-if="userStatus" class="lk-body-menu-link" @click="changeTab(1)">Мои доступы</span>
                <!-- </router-link> -->
                <!-- <router-link  to="/personalarea/subscriptions"> -->
                    <span v-if="userStatus" class="lk-body-menu-link" @click="changeTab(2)">Подписки</span>
                <!-- </router-link> -->
                <!-- <router-link to="/personalarea/emoney"> -->
                    <span v-if="userStatus" class="lk-body-menu-link" @click="changeTab(3)">Безнал</span>
                <!-- </router-link> -->
                <!-- <router-linto="/personalarea/journal"> -->
                    <span v-if="userStatus" class="lk-body-menu-link" @click="changeTab(4)">Журнал</span>
                <!-- </router-link> -->
                <!-- <router-link to="/personalarea/authorization"> -->
                    <span v-if="!userStatus" class="lk-body-menu-link" @click="changeTab(5)">Аавторизация</span>
                <!-- </router-link> -->
                <!-- <router-link to="/personalarea/registration"> -->
                    <span v-if="!userStatus" class="lk-body-menu-link" @click="changeTab(6)">Регистрация</span>
                <!-- </router-link> -->
                <button v-if="userStatus" class="lk-body-menu-link" @click="logOut">Выход</button>

            </div>  
            <div class="lk-body-main">
                <div class="lk-body-main-wrap">
                    <div class="lk-body-main-left" v-if="userStatus">
                        <!-- Инфо о пользователе -->
                        <user-info></user-info>
                    </div>
                    <div :class="{'lk-body-main-right': tabSize, 'lk-body-main-right-small': !tabSize}">
                        <router-view @tryAuthorization="tryAuthorization"></router-view>
                    </div>
                </div>
                
            </div>
        </section>
        
    </div>
</template>

<script>

import UserInfo from './UserInfo'
    export default {
        data() {
            return {
                currentTab: 0,
                tabSize: false
            }
        },
        components: {
            UserInfo,
        },
        computed: {
            userStatus() {
                return this.$store.state.user.status
            }
        },
        created() {
            if (this.$store.state.user.status) {
                this.changeTab(1)
            } else {
                this.changeTab(5)
            }
        },
        watch: {
            currentTab() {
                if (this.currentTab < 5) {
                    this.tabSize = true
                } else {
                    this.tabSize = false
                }

                switch(this.currentTab) {
                    case 0: {
                        this.$router.push("/personalarea/profile")
                        break
                    }
                    case 1: {
                        this.$router.push("/personalarea/accounts")
                        break
                    }
                    case 2: {
                        this.$router.push("/personalarea/subscriptions")
                        break
                    }
                    case 3: {
                        this.$router.push("/personalarea/emoney")
                        break
                    }
                    case 4: {
                        this.$router.push("/personalarea/journal")
                        break
                    }
                    case 5: {
                        this.$router.push("/personalarea/authorization")
                        break
                    }
                    case 6: {
                        this.$router.push("/personalarea/registration")
                        break
                    }
                }
            }
        },
        methods: {
            changeTab(index) {
                this.currentTab = index

            },
            tryAuthorization() {
                this.changeTab(1)
                this.$store.state.user.status = true
                this.$router.push("/personalarea/profile")
            },
            logOut() {
                this.$router.push("/")
                this.$store.state.user.status = false
            }
        },
    }
</script>

<style scoped>
    * {
        color: #575962;
    }
    *::-webkit-scrollbar {
        width: 12px;
        background-color: #F5F5F5;
        border-radius: 10px;

    }
    *::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }
    *::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
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
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
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
        cursor: pointer;
        user-select: none;
        font-size: 16px;
    }
    .lk-body-menu-link:hover {
        background: #eaeaea !important;
    }
    .lk-body-main {
        background-color: #ebedf2;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 5px 0 0px 0;
    }
    .lk-body-main-wrap {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        height: 70vh;
        padding: 30px 0 30px 10px ;
        overflow: auto;
    }
    .lk-body-main-left, .lk-body-main-right, .lk-body-main-right-small {
        background: #fff;
        margin: 0 20px;
        min-width: 300px;
    }
    .lk-body-main-left {
        width: 20%;
        padding-bottom: 30px;
    }
    .lk-body-main-right {
        width: 70%;
        padding-bottom: 30px;
    }
    .lk-body-main-right-small {
        width: 500px;
    }
</style>