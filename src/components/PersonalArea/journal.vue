<template>
    <div>
        <div class="tab">
            <div class="tab-item">
                Журнал
            </div>
        </div>
        <div class="main">
            <h3>Выбирите период</h3>
            <div class="main-filtres">
                <div class="main-filtres-from">
                    <label>Начало периода</label>
                    <datepicker :language="ru" class="main-filtres-datepicker" v-model="dateFrom"></datepicker>
                </div>
                <div class="main-filtres-to">
                    <label>Конец периода</label>
                    <datepicker :language="ru" class="main-filtres-datepicker" v-model="dateTo"></datepicker>
                </div>

            </div>
            <div class="main-btns">
                <div class="main-btns-apply">Применить</div>
                <div class="main-btns-cancel">Сбросить</div>
            </div>

           
            

        </div>

    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

import {ru} from 'vuejs-datepicker/dist/locale'
    export default {
        components: {
            Datepicker
        },
        data() {
            return {
                ru: ru,
                dateFrom: new Date,
                dateTo: new Date,
            }
        },
        methods: {  
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
    .main {
        overflow-y: unset;
    }
    .main h3 {
        margin: 0 40px 30px;
        text-align: left;
    }
    .main-filtres {
        display: flex;
        justify-content: space-around;
    }
    .main-filtres label {
        display: inline-block;
        text-align: left;
        font-size: 13px;
        font-weight: 300;
        margin-bottom: 5px;
    }
    .main-filtres > div {
        display: flex;
        flex-direction: column;
    }
    .main-filtres-datepicker {
        border: 1px solid #ebedf2;
        min-width: 350px;
        padding: 8.5px 13px;
        border-radius: 4px;
        font-family: sans-serif, Arial;
        color: #575962;

    }
    .main-filtres-datepicker.focus {
        border-color: #22456c;
        color: #575962;
    }
    .main-btns {
        display: flex;
        justify-content: flex-start;
    }
    .main-btns > div {
        padding: 5px 30px;
        font-size: 13px;
        width: 200px;
        cursor: pointer;
        margin-top: 20px;
        margin-left: 60px;

    }
    .main-btns-apply {
        background: #34bfa3;
        color: #fff;
    }
    .main-btns-cancel {
        background: #f3f4f9;

    }
</style>