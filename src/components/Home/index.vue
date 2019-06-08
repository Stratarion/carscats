<template>
    <div class="container">
        <div class="menu">
            <div class="menu-top">

                <div class="menu-top-content">
                    <router-link tag="div" class="logo" to="/" >
                        <img src="https://carscats.ru/bitrix/templates/landing/img/logo.png"  alt="">
                    </router-link>
                    <div >
                    </div>
                    <div class="menu-top-links">
                        <a :class="{'active': activeLink == 1}" @click="onMenuLink(1)">Тарифы</a>
                        <a :class="{'active': activeLink == 2}" @click="onMenuLink(2)">Видео</a>
                        <a :class="{'active': activeLink == 3}" @click="onMenuLink(3)">Галерея</a>
                        <a :class="{'active': activeLink == 4}" @click="onMenuLink(4)">Контакты</a>
                    </div>
                    <div class="userroom">
                        <router-link  to="/personalarea/accounts">Личный кабинет</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="first-screen">
            <h2 class="first-screen-header"> {{ firstScreenHeader }} </h2>
            <div class="cards-services">
                <div class="cards-services-item">
                    <img class="cards-services-item-logotype" src="https://carscats.ru/bitrix/templates/landing/img/epc-logo.png" alt="">
                    <h3 class="cards-services-item-header">EPC ONLINE</h3>
                    <p class="cards-services-item-description">Доступ к полному набору программ для подбора запчастей (включая VAG группу)</p>
                    <button class="cards-services-item-btn">Купить</button>
                </div>
                <div class="cards-services-item">
                    <img class="cards-services-item-logotype" src="https://carscats.ru/bitrix/templates/landing/img/epc-logo.png" alt="">
                    <h3 class="cards-services-item-header">EPC ONLINE</h3>
                    <p class="cards-services-item-description">Доступ к полному набору программ для подбора запчастей (включая VAG группу)</p>
                    <button class="cards-services-item-btn">Купить</button>
                </div>
                <div class="cards-services-item">
                    <img class="cards-services-item-logotype" src="https://carscats.ru/bitrix/templates/landing/img/epc-logo.png" alt="">
                    <h3 class="cards-services-item-header">EPC ONLINE</h3>
                    <p class="cards-services-item-description">Доступ к полному набору программ для подбора запчастей (включая VAG группу)</p>
                    <button class="cards-services-item-btn">Купить</button>
                </div>
                <div class="cards-services-item">
                    <img class="cards-services-item-logotype" src="https://carscats.ru/bitrix/templates/landing/img/epc-logo.png" alt="">
                    <h3 class="cards-services-item-header">EPC ONLINE</h3>
                    <p class="cards-services-item-description">Доступ к полному набору программ для подбора запчастей (включая VAG группу)</p>
                    <button class="cards-services-item-btn">Купить</button>
                </div>
                <div class="cards-services-item">
                    <img class="cards-services-item-logotype" src="https://carscats.ru/bitrix/templates/landing/img/epc-logo.png" alt="">
                    <h3 class="cards-services-item-header">EPC ONLINE</h3>
                    <p class="cards-services-item-description">Доступ к полному набору программ для подбора запчастей (включая VAG группу)</p>
                    <button class="cards-services-item-btn">Купить</button>
                </div>
            </div>
        </div>

        <div class="plans">
            <h3 class="plans-header">тарифы</h3>
            <div class="plans-header-lens"></div>
            <p class="plans-description">Вы можете выбрать подходящий именно Вам тарифный план</p>
            <div class="plans-list">
                <div class="plans-list-item">
                    <h3 class="plans-list-item-header">Заголовок</h3>
                    <div class="plans-list-item-body">
                        <h4 class="plans-list-item-body-price">₽ 1500/мес</h4>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <div class="plans-list-item-body-btn">Купить</div>
                    </div>
                </div>
                <div class="plans-list-item">
                    <h3 class="plans-list-item-header">Заголовок</h3>
                    <div class="plans-list-item-body">
                        <h4 class="plans-list-item-body-price">₽ 1500/мес</h4>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <div class="plans-list-item-body-btn">Купить</div>
                    </div>
                </div>
                <div class="plans-list-item">
                    <h3 class="plans-list-item-header">Заголовок</h3>
                    <div class="plans-list-item-body">
                        <h4 class="plans-list-item-body-price">₽ 1500/мес</h4>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <div class="plans-list-item-body-btn">Купить</div>
                    </div>
                </div>
                <div class="plans-list-item">
                    <h3 class="plans-list-item-header">Заголовок</h3>
                    <div class="plans-list-item-body">
                        <h4 class="plans-list-item-body-price">₽ 1500/мес</h4>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <div class="plans-list-item-body-btn">Купить</div>
                    </div>
                </div>
                <div class="plans-list-item">
                    <h3 class="plans-list-item-header">Заголовок</h3>
                    <div class="plans-list-item-body">
                        <h4 class="plans-list-item-body-price">₽ 1500/мес</h4>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <h5 class="plans-list-item-body-option">характеристика</h5>
                        <div class="plans-list-item-body-btn">Купить</div>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="video-instructions">
            <h2>видеоинструкции</h2>
            <div class="video-instructions-body">
                <p class="video-instructions-body-description">Хотите разобраться, как работать с каталогами? Посмотрите наши короткие обучающие видео на эту тeму</p>
                <div class="video-instructions-body-play">
                    <img src="http://kulinar.moscow/wp-content/uploads/2019/04/playb.png" alt="">
                </div>
            </div>
        </div>

        <div class="programm-screens">
            <h2 class="programm-screens-header">программа для подключения</h2>
            <div class="programm-screens-line"></div>
            <p class="programm-screens-desription">Мы разработали простое и удобное решение для подключения к каталогам.</p>
            <div class="programm-screens-gallery">
                <div class="programm-screens-gallery-item">
                    <div class="programm-screens-gallery-item-hover">Доп инфа aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <img src="https://carscats.ru/bitrix/templates/landing/img/crc/crc01.jpg" alt="">
                </div>
                <div class="programm-screens-gallery-item">
                    <div class="programm-screens-gallery-item-hover">Доп инфа aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <img src="https://carscats.ru/bitrix/templates/landing/img/crc/crc01.jpg" alt="">
                </div>
                <div class="programm-screens-gallery-item">
                    <div class="programm-screens-gallery-item-hover">Доп инфа aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <img src="https://carscats.ru/bitrix/templates/landing/img/crc/crc01.jpg" alt="">
                </div>
                <div class="programm-screens-gallery-item">
                    <div class="programm-screens-gallery-item-hover">Доп инфа aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <img src="https://carscats.ru/bitrix/templates/landing/img/crc/crc01.jpg" alt="">
                </div>
                <div class="programm-screens-gallery-item">
                    <div class="programm-screens-gallery-item-hover">Доп инфа aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <img src="https://carscats.ru/bitrix/templates/landing/img/crc/crc01.jpg" alt="">
                </div>
                <div class="programm-screens-gallery-item">
                    <div class="programm-screens-gallery-item-hover">Доп инфа aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <img src="https://carscats.ru/bitrix/templates/landing/img/crc/crc01.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="footer">
            <a class="footer-link" href="">Договор оферты</a>
            <a class="footer-link" href="">Политика конфеденциальности</a>
            <p class="footer-text">2018 © Carscats.ru</p>
        </div>

    </div>
</template>

<script>




    export default {
        data() {
            return {
                activeLink: 0,
                firstScreenHeader: 'НАШИ РЕШЕНИЯ ДЛЯ АВТОБИЗНЕСА'
            }
        },
        methods: {
            onMenuLink(number) {
                this.activeLink = number
            }
        },
        components: {
        }
    }
</script>

<style scoped>
.menu {
    position: fixed;
    margin: 0 auto;
    width: 100%;
    z-index: 998;
}
.menu-top {
    padding: 10px 30px;
    background: #fff;
    box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.06);
}
.menu-top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    margin: 0 auto;
}
.menu-top-links a {
    margin-right: 10px;
    cursor: pointer;
}
.menu-top-links a.active {
    color: red;
}



.container {
    text-align: center;
    position: relative;
    
}
.first-screen {
    padding-top: 100px;
    background-image: url(https://carscats.ru/bitrix/templates/landing/img/hero-area.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding: 150px 0 400px;
    position: relative;
}
.first-screen-header {
    color: whitesmoke;
    text-shadow: -2px 0 #2F2E2C, 0 2px #2F2E2C, 2px 0 #2F2E2C, 0 -2px #2F2E2C;
    font-size: 52px;
    max-width: 700px;
    margin: 0 auto;
}



.cards-services {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: -50px;
    flex-wrap: wrap;
    width: 100%;
}
.cards-services-item {
    width: 220px;
    height: 350px;
    background: #1e1d1b;
    box-shadow: 10px 10px 8px black;
    margin: 20px;
    padding: 30px 20px;
    color:#fff;
    border-radius: 30px;
    position: relative;
    z-index: 995;
}
.cards-services-item:hover {
    background-color: #28446F;
    transform:scale(1.1)
}
.cards-services-item:hover > .cards-services-item-btn {
    background: #1e1d1b;

}
.cards-services-item-logotype {
    width: 120px;
    margin-bottom: 30px;
}
.cards-services-item-header {
    margin-bottom: 15px;
}
.cards-services-item-description {
    line-height: 1.6;
}
.cards-services-item-btn {
    width: 100%;
    background-color: #28446F;
    position: absolute;
    border: none;
    font-size: 18px;
    color: #fff;
    bottom: 0;
    left: 0;
    border-radius: 0 0 30px 30px;
    height: 50px;
    cursor: pointer;
}
.cards-services-item-btn:focus {
    border: none;
}


.plans-header {
    text-transform: uppercase;
    font-size: 42px;
    margin: 160px 0px 0px;
}
.plans-header-lens {
    content: '';
    display: inline-block;
    text-align: center;
    width: 70px;
    height: 2px;
    background-color: #2F2E2C;
}
.plans-description {
    font-size: 18px;
    margin: 20px 0 30px;
}
.plans-list {
    display: flex;
    justify-content: space-around;
    padding: 0 50px;
    flex-wrap: wrap;
}
.plans-header {
    color: #333;
}
.plans-list-item {
    border: 1px solid #f1f1f1;
    padding: 0px 0px 40px 0px;
    margin: 0 0 30px 0;
    width: 240px;
}
.plans-list-item:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
}
.plans-list-item-header {
    width: 100%;
    background-color: #f1f1f1;
    color: #333;

    padding: 25px 20px;
    font-size: 26px;
    text-transform: uppercase;
    font-weight: 700;

}
.plans-list-item-body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.plans-list-item-body-price {
    color: #2F2E2C;
    
    font-size: 38px;
    font-weight: 400;
    margin: 20px 0 10px;
}
.plans-list-item-body-option {
    padding: 10px;
    font-size: 15px;
    border-bottom: 1px dotted #f1f1f1;
    font-weight: 400;
}
.plans-list-item-body-btn {
    background: #28446F;
    position: relative;
    color: #fff;
    z-index: 1;
    border-radius: 30px;
    display: block;
    width: 115px;
    padding: 10px 30px;
    margin: 20px 0px 10px;
}



.video-instructions {
    background-color: #28446F;
    padding: 60px 0 70px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.video-instructions h2 {
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 30px;
}
.video-instructions-body {
    padding: 40px 0px 50px;
    border-top: 1px solid rgba(0,0,0,.1);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.video-instructions-body-description {
    width: 85%;
    font-size: 18px;
    font-weight: 400;
}
.video-instructions-body-play {
    cursor: pointer;
    margin: 50px 0 0;

    padding: 20px;
    border-radius: 50%;
    border: 1px solid #fff; 
}
.video-instructions-body-play img {
    width: 50px;
}


.programm-screens {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.programm-screens-header {
    font-size: 42px;
    text-transform: uppercase;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
}
.programm-screens-line {
    display: inline-block;
    text-align: center;
    width: 70px;
    height: 2px;
    background-color: #2F2E2C;
}
.programm-screens-desription {
    color: #333;
    font-size: 18px;
    font-weight: 400;
    margin: 30px 0;
    padding: 0 20px;
}
.programm-screens-gallery {
    display: flex;
    justify-content: space-around;
    padding: 50px 0px;
    flex-wrap: wrap;
    max-width: 1200px;

}
.programm-screens-gallery-item {
    width: 325px;
    height: 195px;
    margin: 0 0 30px 0;
    position: relative;

}
.programm-screens-gallery-item img {
    height: 100%;
    width: 100%;
}
.programm-screens-gallery-item-hover {
    position: absolute;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,  0);
    opacity: 0;
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    word-break: break-all;
    overflow: hidden;
}
.programm-screens-gallery-item-hover:hover {
    background-color: rgba(0,0,0,  0.8);
    opacity: 1;

}


.footer {
    padding: 30px;
    background-color: #292f35;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-link {
    text-decoration: none;
    color: #fff;
    margin: 0 10px 0 0;
    padding: 0 10px;
    border-right: 1px solid #fff;
}


/* медиа */

@media screen and (max-width: 1320px) {
    .cards-services {
        position: relative;
    }
    .first-screen {
        padding-bottom: 50px;
    }
    .plans-header {
        margin-top: 60px;
    }
}

@media screen and (max-width: 1080px) {

}

</style>