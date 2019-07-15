<template>
    <div>
        
        <div class="tab">
            <div class="tab-item">
               Пользователи
            </div>
        </div>
         <div class="table">
            
            <div class="table-row table-headers-row">
                <div class="table-item table-item-name">Имя</div>
                <div class="table-item table-item-email">Почта</div>
                <div class="table-item table-item-phone">Телефон</div>
                <div class="table-item table-item-date">Дата регистрации</div>
                <div class="table-item table-item-role">Роль</div>
            </div>
            <!-- <div class="table-row table-body-row">
                <div class="table-item table-item-name">Имя</div>
                <div class="table-item table-item-email">Почта</div>
                <div class="table-item table-item-phone">Телефон</div>
                <div class="table-item table-item-date">Дата регистрации</div>
                <div class="table-item table-item-role">Роль</div>

            </div>
            <div class="table-row table-body-row">
                <div class="table-item table-item-name">Имя</div>
                <div class="table-item table-item-email">Почта</div>
                <div class="table-item table-item-phone">Телефон</div>
                <div class="table-item table-item-date">Дата регистрации</div>
                <div class="table-item table-item-role">Роль</div>

            </div> -->
            <div class="table-row table-body-row" v-for="user in usersList" :key="user.id">
                <div class="table-item table-item-name">{{ user.first_name + ' ' + user.last_name }}</div>
                <div class="table-item table-item-email">{{ user.email }}</div>
                <div class="table-item table-item-phone">{{ user.phone }}</div>
                <div class="table-item table-item-date">Дата регистрации</div>
                <div class="table-item table-item-role">{{ user.role }}</div>
            </div>

         </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService';

    export default {
        data() {
            return {
                usersList: []
            }
        },
        async mounted() {
            let res = await UserService.getUsers()
            this.usersList = res.data.users
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

.table {
    width: 90%;
    margin: 0 auto;
    border: 1px solid #97979780;
}

.table-headers-row {
    background: #f4f3f8;
}

.table-row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #97979780;
}

.table-row:nth-last-child(1) {
    border: none;
}

.table-item {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 15px; */
    font-size: 14px;
    flex-grow: 1;
    width: 20%;
    border-right: 1px solid #97979780;

}
.table-item-name {
    width: 30%;
}
.table-item-email {
    width: 25%;
}
.table-item-role {
    width: 10%;
}
.table-item-date {
    width: 15%;
}
.table-item:nth-last-child(1) {
    border: none;
}

</style>