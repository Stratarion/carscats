<template>
    <div>
        <div class="tab">
            <div class="tab-item">
                Регистрация
            </div>
        </div>
        <div class="main">
            <div class="main-row">
                <label class="main-row-head">Электронная почта:</label>

                <input type="text" class="main-row-input">
            </div>
            <div class="main-row">
                <label class="main-row-head">Телефон:</label>
                <input type="text" class="main-row-input">
            </div>
            <div class="main-row">
                <label class="main-row-head">ФИО:</label>
                <input type="text" class="main-row-input">
            </div>
            <div class="main-row">
                <label class="main-row-head">Название организации (необязательно):</label>
                <input type="text" class="main-row-input">
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
                <input type="text" class="main-row-input">
            </div>
            
            <div class="main-row">
                <label class="main-row-head">Повторите пароль:</label>
                <input type="text" class="main-row-input">
            </div>
            <div class="main-bot">
                <div class="main-bot-btn" style="background: #34bfa3;color: #fff;">Регистрация</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                diller: "Да",
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
                ]
            }
        },
        computed: {
           
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