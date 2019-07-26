<template>
    <div class="lk">
        <section class="top">
            <router-link tag="div" class="logo" to="/">
                <img src="@/img/logo.gif" alt="">
            </router-link>
            <h2>Личный кабинет</h2>
        </section>

        <section class="lk-body">
            <div class="lk-body-menu">
                <span v-if="userStatus && !admin"  class="lk-body-menu-link" @click="changeTab(0)">Профиль</span> 
                <!-- <span v-if="userStatus && !admin" class="lk-body-menu-link" @click="changeTab(1)">Мои доступы</span> -->
                <span v-if="userStatus" class="lk-body-menu-link" @click="changeTab(2)">Новости</span>
                <span v-if="userStatus && !admin" class="lk-body-menu-link" @click="changeTab(3)">Тарифы</span>
                <!-- <span v-if="userStatus && !admin" class="lk-body-menu-link" @click="changeTab(4)">Журнал</span> -->
                <span v-if="admin" class="lk-body-menu-link" @click="changeTab(5)">Редактор тарифов</span>
                <span v-if="admin" class="lk-body-menu-link" @click="changeTab(6)">Добавить новость</span>
                <span v-if="admin" class="lk-body-menu-link" @click="changeTab(7)">E-mail рассылка</span>
                <span v-if="admin" class="lk-body-menu-link" @click="changeTab(8)">Пользователи</span>
                <span v-if="!userStatus" class="lk-body-menu-link" @click="changeTab(9)">Аавторизация</span>
                <span v-if="!userStatus" class="lk-body-menu-link" @click="changeTab(10)">Регистрация</span>
                <button v-if="userStatus" class="lk-body-menu-link" @click.stop="logOut">Выход</button>
            </div>  
            <div class="lk-body-main">
                <div class="lk-body-main-wrap">
                    <div class="lk-body-main-left" v-if="tabSize">
                        <!-- Инфо о пользователе -->
                        <user-info></user-info>
                    </div>
                    <div :class="{'lk-body-main-right': tabSize, 'lk-body-main-right-small': !tabSize}">
                        <router-view @userLog="userLog" ></router-view>
                    </div>
                </div>
                
            </div>
        </section>
        
    </div>
</template>

<script>

import UserInfo from './UserInfo'
import jwtDecode from 'jwt-decode'


    export default {
        data() {
            return {
                currentTab: 0,
                tabSize: false,
                userStatus: false,
                user: {},
                admin: false
            }
        },
        components: {
            UserInfo,

        },
        computed: {
            getUser() {
                return null
            },
            isUserLogIn() {
                return this.$store.user ? true : false
            }
        },
        created() {

            const token = localStorage.usertoken
            if (token) {
                const decoded = jwtDecode(token)
                this.$store.user = decoded
                this.userLog()
                this.user = decoded
                if (this.user.role === 'admin') {
                    this.admin = true
                }
                
            }
            
            if (!this.$store.user) {
                this.changeTab(9)
            } 
        },
        watch: {
            currentTab() {
                this.changeMainSize()

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
                        this.$router.push("/personalarea/news")
                        break
                    }
                    case 3: {
                        this.$router.push("/personalarea/tarifs")
                        break
                    }
                    case 4: {
                        this.$router.push("/personalarea/journal")
                        break
                    }
                    case 5: {
                        this.$router.push("/personalarea/tarifseditor")
                        break
                    }
                    
                    case 6: {
                        this.$router.push("/personalarea/addnews")
                        break
                    }
                    case 7: {
                        this.$router.push("/personalarea/emailsender")
                        break
                    }
                    case 8: {
                        this.$router.push("/personalarea/userslist")
                        break
                    }
                    case 9: {
                        this.$router.push("/personalarea/authorization")
                        break
                    }
                    case 10: {
                        this.$router.push("/personalarea/registration")
                        break
                    }
                }
            }
        },
        methods: {
            userLog() {
                this.userStatus = true
                if (this.$store.user.role === 'admin') {
                    this.admin = true
                    this.changeTab(8)
                } else {
                    this.changeTab(2)
                }
            },
            changeMainSize() {
                if (this.currentTab < 9) {
                    this.tabSize = true
                    
                } else {
                    this.tabSize = false
                }
            },
            changeTab(index) {
                this.currentTab = index
                this.changeMainSize()
            },
            logOut() {
                localStorage.removeItem('usertoken')
                this.$store.user = null
                this.userStatus = false
                this.$router.push("/")
            },

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
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }

    *::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    .lk {
        background-image: url(../../img/backgrounds/back12.jpg);
        background-repeat: repeat;

        background-size: 300px;
        min-height: 100vh;
    }

    .top {
        display: flex;  
        justify-content: space-between;  
        align-items: center;
        color: #fff;
        padding: 30px 100px;
    }

    .top h2 {
        color: #000;
    }

    .top img {
        /* box-shadow: 0 3px 6px #000; */
        filter: drop-shadow(0 0px 5px rgba(0, 0, 0, 0.397));
        width: 440px;
        position: absolute;

        top: 10px;

    }

    .lk-body {
        width: 90%;
        margin: 20px auto 0;
        border: 1px solid black;
        border-radius: 10px;
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
        height: 75vh;
        min-height: 450px;
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