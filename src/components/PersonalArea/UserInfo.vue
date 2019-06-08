<template>
    <div>
        <div class="top">
            <div class="top-avatar">
                <img src="../../img/user-with-shirt-and-tie_icon-icons.com_68276.svg" alt="">
            </div>
            <div class="top-info">
                <h3 class="top-info-name">Волков Олег Игоревич</h3>
                <h4 class="top-info-company">Компания: нет</h4>
                <h4 class="top-info-id">ID: 67078</h4>
            </div>

        </div>
        <div class="tariffs">
            <h3>Персональный тариф</h3>
            <div class="tariffs-item">
                <font-awesome-icon :icon="['fas', 'cog']"  size="lg" :style="{'color': '#34bfa3'}"/>
                <a href="">EPC (online):</a>
                <div class="tariffs-item-price">1500 руб.</div>
            </div>
            <div class="tariffs-item">
                <font-awesome-icon :icon="['fas', 'cog']"  size="lg" :style="{'color': '#34bfa3'}"/>
                <a href="">VAG (online):</a>
                <div class="tariffs-item-price">1000 руб.</div>
            </div>
            <div class="tariffs-all">
                <div class="tariffs-all-btn">
                    <font-awesome-icon :icon="['fas', 'angle-double-down']" />
                    Показать все тарифы
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.top {
    display: flex;
    border-bottom: 1px solid #ebedf2;
    padding: 20px 0 10px;

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
}
.top-info h4, .top-info h3{
    font-weight: normal;
    margin: 0px 0 10px;
}
.top-info-name {
    text-align: left;
    font-weight: 500;
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