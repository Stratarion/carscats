<template>
    <div>
        <div class="top">
            <!-- <div class="top-avatar">
                <img src="../../img/user-with-shirt-and-tie_icon-icons.com_68276.svg" alt="">
            </div> -->
            <div class="top-info">
                <h3 class="top-info-name"> {{ first_name}} {{ last_name }} </h3>
                <h4 class="top-info-company">Компания: нет</h4>
                <h4 class="top-info-id">Почта: {{ email }}</h4>
                <h4 class="top-info-id">Телефон: {{ phone }}</h4>

            </div>
            <div class="top-tarif" v-if="startDate !== ''">
                
                <div>Последняя оплата: {{ startDate }}</div>
                <div>Оплачено дней: {{ userAccess.duration }}</div>
                <div>Оплачено до: {{ lastDate }} </div>
            </div>
            <div v-else-if="role === 'user'" class="top-tarif">
                <div>Нет оплаченного доступа</div>
            </div>
            <div v-else class="top-tarif">
                <div>Админ панель</div>
            </div>
            
        </div>

    </div>
</template>

<script>

import AccessService from '@/services/AccessService'
import moment from 'moment'
// import { request } from 'http';

    export default {
        data() {
            return {
                
                first_name: this.$store.user.first_name,
                last_name: this.$store.user.last_name,
                email: this.$store.user.email,
                role: this.$store.user.role,
                id: this.$store.user._id,
                phone: this.$store.user.phone,
                startDate: '',
                lastDate: '',
                
                userAccess: {}
            }
        },
        computed: {
        },
        methods: {
            async getAccess() {
                let data = {
                    params: {
                        email: this.$store.user.email
                    }
                }
                await AccessService.userAccess(data)
                    .then((res) => {
                        this.userAccess = res.data.access[0]
                        moment.locale('ru')
                        this.startDate = moment(res.data.access[0].startFrom).format("DD MMM  YYYY")
                        this.lastDate = moment(res.data.access[0].startFrom).add(res.data.access[0].duration, 'days').format("DD MMM  YYYY")
                    })
                
                

            }
        },
        created() {
            if (this.$store.user.role === 'user')
            this.getAccess()
        }
    }
</script>

<style scoped>
.top {
    display: flex;
    flex-direction: column;
    padding: 20px 5px 10px;

}
.top-avatar {
    display: flex;
    align-items: center;
    padding: 10px;
}
.top-avatar img {
    border: 1px solid black;
    border-radius: 50%;
    padding: 0px;
    width: 50px;
}
.top-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 10px;
    text-align: left;
    border-bottom: 1px solid #ebedf2;

}
.top-info h4, .top-info h3{
    font-weight: normal;
    margin: 0px 0 10px;
}
.top-info-name {
    text-align: left;
    font-weight: 500;
}
.top-tarif {
    padding: 20px 10px;
}

.top-tarif > div {
    margin-bottom: 10px;
    text-align: left;
}

.tariffs {
    padding: 20px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.tariffs h3 {
        font-weight: 600;
        width: 100%;
        margin-bottom: 30px;
}
.tariffs-item {
    margin: 10px 0;
    padding: 0 20px;
}
.tariffs-item a {
    text-decoration: none;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
}
.tariffs-all {
    width: 100%;
    text-align: center;
    display: inline-block;
    margin-top: 30px;
}
.tariffs-item-price {
    margin-top: 5px;
}
</style>