<template>
    <div>
        <h3>Добавить новый тариф</h3>
        <div class="wrap add-new">
            <div class="add-new-tarif">
                <h4>Название тарифа</h4>
                <input v-model="headertarif" type="text">
                <h4>Описание тарифа</h4>
                <textarea v-model="descriptiontarif" ></textarea>
                <h4>Продолжительность (время действия при 1 покупке, в днях)</h4>
                <input v-model="durationtarif" type="number">
                <h4>Цена</h4>
                <input v-model="pricetarif" type="number">

                <button @click="sendtarif">Send</button>
            </div>
        </div>
        <h3>Действующие тарифы</h3>
        <div class="wrap">

            <div class="tarif" v-for="item in tarifs" :key="item.id">
                <div class="tarif-info">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                    <p>Продолжительность: {{ item.duration }} </p>
                    <p>Стоимость: {{ item.price }} </p>

                </div>
                <div class="tarif-btns">
                    <div class="edit">Редактировать</div>
                    <div class="delete" @click="deletetarif(item._id)">Удалить</div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import TarifsService from '@/services/TarifsService';

    export default {
        data() {
            return {
                login: '',
                password: '',
                posts: [],
                
                headertarif: '',
                descriptiontarif: '',
                tarifs: [],
                durationtarif: 1,
                pricetarif: 1200
            }
        },
        methods: {
            async deletetarif(id) {
                await TarifsService.deletePost(id)
                this.gettarifs()

            },
            async getPostById(id) {
                var res = await TarifsService.getPost({id: id})
                return res

            },
            async gettarifs() {
                const response = await TarifsService.fetchTarifs() 
                this.tarifs = response.data.tarifs
            },
            
            async sendtarif() {
                await TarifsService.addTarif({
                    title: this.headertarif,
                    description: this.descriptiontarif,
                    duration: this.durationtarif,
                    price: this.pricetarif
                }).then((res) => {
                    // console.log(res)
                    if (res.status === 200) {
                        this.headertarif = ''
                        this.descriptiontarif = ''
                        this.durationtarif = 1
                        this.pricetarif = 1200

                    } else {
                        alert('Что-то пошло не так...', res)
                    }
                    
                })
                this.gettarifs()
            } 
            // async getPosts () {
            //     const response = await PostsService.fetchPosts()
            //     this.posts = response.data.posts
            // }
        },
        mounted() {
            this.gettarifs()
        }
    }
</script>

<style scoped>
h3 {
    margin: 30px 0;
}
.wrap {
    padding-top: 0px;
}
.add-new {
    border-bottom: 1px solid #aeaeae;
    padding-bottom: 40px;
}
.tarif {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    padding: 0px 50px;
}
.tarif-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 300px;
    padding-left: 20px;
    text-align: left;
}
.tarif-btns {
    display: flex;

}
.tarif-btns > div {
    padding: 10px 20px;
    width: 200px;
    height: 40px;
    border: 1px solid #aeaeae;
    margin: 0 10px;
    cursor: pointer;
    
}
.add-new-tarif {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 0 30px 30px;
    z-index: 10;
}
.add-new-tarif button {
    position: absolute;
    width: 100px;
    bottom: 0;
    cursor: pointer;
    right: 30px;
    z-index: 99;

}
.add-new-tarif input, .add-new-tarif textarea {
    width: 100%;
    border: 1px solid #aeaeae;
    padding: 10px;
    margin: 10px 0;

}
.add-new-tarif textarea {
    height: 160px;
    resize: none;

}
</style>