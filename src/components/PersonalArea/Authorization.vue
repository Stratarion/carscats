<template>
    <div>
        <div class="tab">
            <div class="tab-item">
                Авторизация
            </div>
        </div>
        <div class="main">
            <div class="main-row">
                <label class="main-row-head">Логин:</label>
                <input type="text" v-model="login" class="main-row-input">
            </div>
            <div class="main-row">
                <label class="main-row-head">Пароль:</label>
                <input type="text" v-model="password" class="main-row-input">
            </div>
            <div class="main-bot">
                <div class="main-bot-btn" style="background: #34bfa3;color: #fff;" @click="tryAuthorization">Вход</div>
                <div class="main-bot-btn">Восстановить пароль</div>
            </div>
             <input style="border: 1px solid red;" v-model="headerTest" type="text">
            <textarea style="border: 1px solid red;" v-model="descriptionTest" name="" id="" cols="30" rows="10"></textarea>
            <button @click="sendTest">Test</button>

            <div v-for="item in tests" :key="item.id">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import TarifsService from '@/services/TarifsService';

// import PostsService from '@/services/PostsService'


    export default {
        data() {
            return {
                login: '',
                password: '',
                posts: [],
                
                headerTest: '',
                descriptionTest: '',
                tests: []
            }
        },
        methods: {
            tryAuthorization() {
                let user = {
                    email: this.login,
                    password: this.password
                }
                alert(user)
                this.getPosts ()
            },
            async getTests() {
                const response = await TarifsService.fetchTarifs() 
                this.tests = response.data.tarifs
            },
            
            async sendTest() {
                await TarifsService.addTarif({
                    title: this.headerTest,
                    description: this.descriptionTest
                }).then((res) => {
                    // console.log(res)
                    if (res.status === 200) {
                        this.headerTest = ''
                        this.descriptionTest = ''
                    } else {
                        alert('Что-то пошло не так...', res)
                    }
                    
                })
                this.getTests()
            } 
            // async getPosts () {
            //     const response = await PostsService.fetchPosts()
            //     this.posts = response.data.posts
            // }
        },
        mounted() {
            this.getTests()
        }
    }
</script>

<style scoped>
    .tab {
        width: 100%;
        border-bottom: 1px solid #ebedf2;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 50px;

    }
    .tab-item {
        padding: 20px 10px;
        border-bottom: 1px solid #22456c;
        margin-bottom: -1px;
        margin-left: 30px;
        color: #22456c;
    }
    .main-row {

        display: flex;
        justify-content: space-around;
        margin: 20px 0;
        flex-direction: column; 


        align-items: center;
    }
    .main-row-head {
        width: 200px;
        margin: 10px 0;
    }
    .main-row-input {
        border: 1px solid #ebedf2;
        min-width: 350px;
        width: 70%;
        border-radius: 4px;
        font-family: sans-serif, Arial;
        color: #575962;
        padding: 10px 10px;
        text-align: center;
    }
    .main-bot {
       display: flex;
       flex-direction: column; 
       align-items: center;
       margin-top: 30px;
    }
    .main-bot-btn {
        background: #f3f4f9;
        padding: 10px 30px;
        cursor: pointer;
        display: inline-block;
        margin: 10px;
        font-size: 13px;
        width: 300px;
    }
    
    .main-row-input:focus {
        border-color: #22456c;
        color: #575962;
    }
</style>