<template>
    <div>
        <div class="tab">
            <div class="tab-item">
                Регистрация
            </div>
        </div>
        <div class="main">
            <form action="">
                <div class="main-row">
                    <label class="main-row-head">Электронная почта:</label>

                    <input v-model="email" type="text" class="main-row-input" @blur="$v.email.$touch()">
                </div>
                
                <div class="main-row">
                    <label class="main-row-head">Номер телефона</label>
                    <input v-model="email" type="text" class="main-row-input" @blur="$v.email.$touch()">
                </div>
                <div class="main-row">
                    <label class="main-row-head">Имя</label>
                    <input v-model="email" type="text" class="main-row-input" @blur="$v.email.$touch()">
                </div>
                <div class="main-row">
                    <label class="main-row-head">Фамилия:</label>
                    <input v-model="email" type="text" class="main-row-input" @blur="$v.email.$touch()">
                </div>
                <div class="main-row">
                    <label class="main-row-head">Фамилия:</label>
                    <input v-model="email" type="text" class="main-row-input" @blur="$v.email.$touch()">
                </div>
                <div class="main-row">
                    <label class="main-row-head">Организация (не обязательно):</label>
                    <input v-model="email" type="text" class="main-row-input" @blur="$v.email.$touch()">
                </div>
                
                <div class="main-row">
                    <label class="main-row-head">Страна:</label>
                    <select v-model="contry_select" class="main-row-input">
                        <option v-for="contry in contrys" :key="contry.id" v-bind:value="contry.name">
                            {{ contry.name }}
                        </option>
                    </select>
                </div>
                
                <div class="main-row">
                    <label class="main-row-head">Официальный дилер:</label>
                    <select v-model="diller" class="main-row-input">
                        <option>Да</option>
                        <option>Нет</option>

                    </select>
                </div>
                <div class="main-row">
                    <label class="main-row-head">Пароль:</label>
                    <input type="password" class="main-row-input" v-model="password">
                </div>
                
                <div class="main-row">
                    <label class="main-row-head">Повторите пароль:</label>
                    <input type="password" class="main-row-input">
                </div>
                <div class="main-bot">
                    <button class="main-bot-btn" style="background: #34bfa3;color: #fff;" @click.stop.prevent="createUser">Регистрация</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import UserService from '@/services/UserService';
import { required, email } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                diller: "Нет",
                contry_select: 'Выбирите страну',
                contrys: [
                    {
                        name: "Россия"
                    },
                    {
                        name: "Казахстан"
                    },
                    {
                        name: "Украина"
                    },
                    {
                        name: "Белорусия"
                    },
                    {
                        name: "Незнаю"
                    }
                ],
                first_name: 'test',
                last_name: 'test',
                email: 'test@mail.rr',
                password: 'testtt',
                phone: 'test',

            }
        },
        methods: {
            async createUser() { 
                await UserService.registerUser({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    contry: this.contry,
                    phone: this.phone,
                })

            }
        },
        computed: {
        },
        validations: {
            email: {
                required,
                email 
            }
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