<template>
    <div>
        <div class="tab">
            <div class="tab-item">
                Мои доступы
            </div>
        </div>
        <div class="menu">
            <div class="menu-item">Продлить</div>
            <div class="menu-item">Изменить логин</div>
            <div class="menu-item">Изменить пароль</div>
            <div class="menu-item">Создать новый доступ</div>
            <div class="menu-item">Удалить доступ</div>
        </div>
        <div class="table">
            
            <div class="table-row table-row-headers">
                <label for="checkbox" class="table-item table-item-check-box table-item-check-box-header" :class="{'active': checkAll}"></label>
                <input v-model="checkAll" type="checkbox" id="checkbox" style="display: none;">
                <div class="table-item table-item-service table-item-service-header">Услуга</div>
                <div class="table-item table-item-name table-item-name-header">Имя ползователя</div>
                <div class="table-item table-item-password table-item-password-header">Пароль</div>
                <div class="table-item table-item-date table-item-date-header">Активен до</div>
                <div class="table-item table-item-status table-item-status-header">Статус</div>
                <div class="table-item table-item-subscrib table-item-subscrib-header">Оформлена подписка</div>

            </div>
            <div class="table-row">
                <div class="table-item table-item-check-box"></div>
                <div class="table-item table-item-service">Услуга</div>
                <div class="table-item table-item-name">Имя ползователя</div>
                <div class="table-item table-item-password">Пароль</div>
                <div class="table-item table-item-date">Активен до</div>
                <div class="table-item table-item-status">Статус</div>
                <div class="table-item table-item-subscrib">Оформлена подписка</div>

            </div>



        </div>
    </div>
</template>

<script>

import AccessService from '@/services/AccessService'
    export default {
        data() {
            return {
                checkAll: false,
                userAccess: {}
            }
        },
        methods: {
            async getAccess() {
                await AccessService.userAccess({email: this.$store.user.email})
                    .then ((res) => {
                        this.userAccess = res.data.access
                    })
            }
        },
        created() {
            // this.getAccess()
        }
    }
</script>

<style scoped>
    .tab {
        width: 100%;
        border-bottom: 1px solid #ebedf2;
        display: flex;
        justify-content: flex-start;

    }
    .tab-item {
        padding: 20px 10px;
        border-bottom: 1px solid #22456c;
        margin-bottom: -1px;
        margin-left: 30px;
        color: #22456c;
    }

    .menu {
        display: flex;
        justify-content: flex-end;
        padding: 20px;
    }
    .menu-item {
        cursor: pointer;
        margin: 5px 15px 5px 0;
        background: #f3f4f9;
        border: 1px solid #ebedf2;
        padding: 5px 20px;
        font-size: 13px;
        color: #000;
    }
    .menu-item:nth-child(1) {
        background: #34bfa3;
        color: #fff;
    }
    .menu-item:nth-last-child(1) {
        
        background: #f4516c;
        color: #fff;
    }


    .table {
        width: 90%;
        margin: 0 auto;
        
    }
    .table-row-headers {
        background: #f4f3f8;
    }

    .table-row {
        display: flex;
        align-items: center;

    }
    .table-item {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
        font-size: 14px;
        /* border: 1px solid red; */
    }
    .table-item-check-box {
        background: none;
        border: 1px solid #aeaeae;
        width: 30px;
        height: 25px;
        border-radius: 5px;
        padding: 0;
        margin-left: 30px;
        transition: 0.3s;
    }
    .table-item-check-box.active {
        background: #34bfa3;
    }
    .table-item-service {
        width: 25%;

    }
    .table-item-name {
        width: 25%;
    }
    .table-item-password {
        width: 10%;
    }
    .table-item-date {
        width: 15%;
    }

    .table-item-password {
        width: 15%;
    }

    .table-item-subscrib {
        width: 15%;
    }
    
</style>