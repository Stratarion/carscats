<template>
    <div>
        <div class="tab">
            <div class="tab-item">
                Мой профиль
            </div>
            
        </div>
        <div class="main">
            <div class="main-row">
                <label class="main-row-head">E-Mail:</label>
                <input type="text" placeholder="Ваша почта" class="main-row-input" v-model="email">
            </div>
            <div class="main-row">
                <label class="main-row-head">Имя:</label>
                <input type="text" placeholder="Ваше Имя" class="main-row-input" v-model="first_name">
            </div>
            <div class="main-row">
                <label class="main-row-head">Фамилия:</label>
                <input type="text" placeholder="Ваша фамилия" class="main-row-input" v-model="last_name">
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
                <label class="main-row-head">Город:</label>
                <input type="text" class="main-row-input">
            </div>
            <div class="main-row">
                <label class="main-row-head">Организация:</label>
                <input type="text" class="main-row-input">
            </div>
            <div class="main-row">
                <label class="main-row-head">Телефон:</label>
                <input type="text" class="main-row-input">
            </div>
            <div class="main-row">
                <label class="main-row-head">Новый пароль:</label>
                <input type="text" class="main-row-input">
            </div>
            <div class="main-row">
                <label class="main-row-head">Подтверждение:</label>
                <input type="text" class="main-row-input">
            </div>
            <div class="main-row">
                <label class="main-row-head">Официальный дилер:</label>
                <select v-model="diller" class="main-row-input">
                    <option>Да</option>
                    <option>Нет</option>

                </select>
            </div>
            <div class="main-row">
                <label class="main-row-head">Skype:</label>
                <input type="text" class="main-row-input">
            </div>
            <div class="main-bot">
                <div class="main-bot-btn" style="background: #34bfa3;color: #fff;" @click="updateUser">Сохранить</div>
                <div class="main-bot-btn">Сбросить</div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService';

    export default {
        data() {
           
            return {
                first_name: this.$store.user.first_name,
                last_name: this.$store.user.last_name,
                email: this.$store.user.email,
                diller: "Да",
                contry_select: this.$store.user.contry,
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
                ]
            }
        },
        methods: {
            async updateUser() {
                await UserService.update({
                    id: this.$store.user._id,
                    phone: 1111
                })
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
        align-items: center;
        margin: 0 200px 30px 50px ;
    }
    .main-row-head {
        width: 200px;
        text-align: left;
    }
    .main-row-input {
        border: 1px solid #ebedf2;
        min-width: 350px;
        width: 70%;
        padding: 8.5px 13px;
        border-radius: 4px;
        font-family: sans-serif, Arial;
        color: #575962;
    }
    .main-row-input:focus {
        border-color: #22456c;
        color: #575962;
    }
    
    .main-bot-btn {
        background: #f3f4f9;
        padding: 10px 30px;
        cursor: pointer;
        display: inline-block;
        margin: 10px;
        font-size: 13px;
    }

</style>