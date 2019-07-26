<template>
    <div>
        <div class="tab">
            <div class="tab-item">
                Доступные тарифы
            </div>
            
        </div>
        <div class="main">
            <div class="tarifs">
                <div class="tarifs-row" v-for="tarif in tarifs" :key="tarif.id">
                    <div class="tarifs-row-info">
                        <div class="tarifs-row-info-header">{{ tarif.title }}</div>
                        <div class="tarifs-row-info-description">{{ tarif.description }}</div>
                        <div class="tarifs-row-info-duration">Длительность тарифа: {{ tarif.duration }} дней</div>
                    </div>
                    <div class="tarifs-row-coast">
                        <div class="tarifs-row-coast-info">
                            <div class="tarifs-row-coast-info-header">Стоимость тарифа:</div>
                            <div class="tarifs-row-coast-info-price">{{ tarif.price }} рублей</div>
                        </div>
                        <div class="tarifs-row-coast-buy" @click.stop="buyAccess(tarif)">Оплата</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TarifsService from '@/services/TarifsService';
import AccessService from '@/services/AccessService';


    export default {
        data() {
            return {
                tarifs: [],

            }
        },
        methods: {
            async gettarifs() {
                const response = await TarifsService.fetchTarifs() 
                this.tarifs = response.data.tarifs
            },
            async buyAccess(tarif) {
                let data = {
                    email: this.$store.user.email,
                    tarif_id: tarif._id
                }
                await AccessService.addAccess(data)
            },
            async getaccess() {
                await AccessService.userAccess({email: this.$store.user.email}) 
            },
        },
        mounted() {
            this.gettarifs()
            // this.getaccess(this.$store.user.email)
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
    .main p {
        text-align: left;
    }
    .main {
        padding: 0 20px;
    }
    .tarifs-row {
        display: flex;
        justify-content: space-between;
        border: 1px solid #505050dc;
    }
    .tarifs-row > div {
        width: 50%;
        /* padding: 20px; */

        /* display: flex; */
        /* justify-content: flex-start; */
    }
    .tarifs-row-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-right: 1px solid #505050dc;

    }
    .tarifs-row-info > div {
        padding: 10px;
    }
    .tarifs-row-info-header {
        font-size: 1.4rem;
        font-weight: 600;

        text-align: left;
        margin-bottom: 10px;
    }
    .tarifs-row-info-description {
        font-size: 0.8rem;
        text-align: left;
        margin-bottom: 10px;

    }
    .tarifs-row-info-duration {
        text-align: right;
        font-weight: 600;
        font-size: 1rem;
        border-top: 1px solid #505050dc;
        padding-top: 10px;
        width: 100%;

    }

    .tarifs-row-coast {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
        padding: 20px;
        width: 100%;
    }
    
    .tarifs-row-coast-info {
        display: flex;
        justify-content: space-between;
    }
    .tarifs-row-coast-info-price {
        font-weight: 600;
        font-size: 1rem;
    }
    .tarifs-row-coast-buy {
        background: #5ec75e;
        color: #fff;
        padding: 5px 30px;
        margin: 0;
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 1rem;

    }
    
</style>