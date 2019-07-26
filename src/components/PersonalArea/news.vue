<template>
    <div>
         <div class="tab">
            <div class="tab-item">
                Новости
            </div>
        </div>

        <div class="news">
            <div class="news-item" v-for="news of newsList" :key="news._id">
                <div class="news-item-header">{{ news.title }}</div> 
                <div class="news-item-body" v-html="news.text"></div>
                <div class="news-item-date">{{ dateWithMoment(news.date)}}</div>
            </div>
        </div>
        
    </div>
</template>

<script>

import moment from 'moment'
import newsService from '@/services/NewsService'

    export default {

        data() {
            return {
                newsList: []
            }
        },

        methods: {
            dateWithMoment(date) {
                moment.locale('ru')
                return moment(date).format("DD MMM  YYYY")
            }
        },

        async created() {
            let res = await newsService.allNews()
            if (res.status === 200) {
                this.newsList = res.data.news
            } else {
                
                /* eslint-disable */
                console.log(res.status)
            }
        }
    }
</script>

<style lang="scss" scoped>

.tab {
    width: 100%;
    border-bottom: 1px solid #ebedf2;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 50px;

    &-item {
        padding: 20px 10px;
        border-bottom: 1px solid #22456c;
        margin-bottom: -1px;
        margin-left: 30px;
        color: #22456c;
    }

}

.news {
    padding: 10px 20px;


    &-item {
        border: 1px solid #aeaeaee1;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        padding: 10px 10px 50px;
        position: relative;


        &-header {
            text-align: left;
            font-size: 19px;
            font-weight: 600;
            padding-bottom: 15px;
            border-bottom: 1px solid #aeaeae70;
        }

        &-body {
            text-align: left;
            font-size: 16px;
            margin-top: 20px;
        }

        &-header, &-body {
            padding-left: 10px;
        }

        &-date {
            position: absolute;
            right: 20px;
            bottom: 10px;
            opacity: 0.7;
        }
    }
}
</style>