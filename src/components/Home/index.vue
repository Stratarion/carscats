<template>
    <section class="container">
        <section id='first'>
            <div class="menu">
                <div class="menu-top">

                    <div class="menu-top-content">
                        <router-link tag="div" class="logo" to="/" >
                            <img src="https://carscats.ru/bitrix/templates/landing/img/logo.png"  alt="">
                        </router-link>
                        <div >
                        </div>
                        <div class="menu-top-links">
                            <a href="#first" :class="{'active': activeLink == 1}" @click="onMenuLink(1)">Тарифы</a>
                            <a href="#second" :class="{'active': activeLink == 2}" @click="onMenuLink(2)">Видео</a>
                            <a href='#thirst' :class="{'active': activeLink == 3}" @click="onMenuLink(3)">Галерея</a>
                            <a href='#four' :class="{'active': activeLink == 4}" @click="onMenuLink(4)">Контакты</a>
                        </div>
                        <div class="userroom">
                            <router-link :test="'test'"  :to="lkLink()">Личный кабинет</router-link>
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
        </section>
        
        <section id='second'>
            <div class="video-instructions">
                <h2>видеоинструкции</h2>
                <div class="video-instructions-body">
                    <p class="video-instructions-body-description">Хотите разобраться, как работать с каталогами? Посмотрите наши короткие обучающие видео на эту тeму</p>
                    <div class="video-instructions-body-play">
                        <img src="http://kulinar.moscow/wp-content/uploads/2019/04/playb.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        
        <section id='thirst'>
            <div class="programm-screens">
                <h2 class="programm-screens-header">программа для подключения</h2>
                <div class="programm-screens-line"></div>
                <p class="programm-screens-desription">Мы разработали простое и удобное решение для подключения к каталогам.</p>
                <div class="programm-screens-gallery">
                    <div class="programm-screens-gallery-item" v-for="(screen, index) in programmScreensList" :key="screen.id" @click="openProgrammScreensModal(index)">
                        <div class="programm-screens-gallery-item-hover">{{ cutText(35, screen.description) }}</div>
                        <div class="programm-screens-gallery-item-image" v-bind:style="{ backgroundImage: 'url(' + screen.url + ')' }"></div>
                    </div>
                </div>
            </div>
        </section>

        <section id='four'>
            <div class="footer">
                <a class="footer-link" href="">Договор оферты</a>
                <a class="footer-link" href="">Политика конфеденциальности</a>
                <p class="footer-text">2018 © Carscats.ru</p>
            </div>
        </section>
        

        <!-- модальные окна -->

        <modal-template  v-if="programmScreensModalStatus" @close="closeModalProgrammScreens">
            <div slot="body">
                <div class="slider">
                    <div class="slider-btn slider-btn-prev" @click="changeSlide('prev')"></div>
                    <div class="slider-btn slider-btn-next" @click="changeSlide('next')"></div>

                    <img class="slider-slide slider-slide-absolute slider-slide-left" :src="programmScreensList[currentProgrammScreen-1].url" v-if="programmScreensList[currentProgrammScreen-1]">
                    <div class="slider-slide slider-slide-current" v-bind:style="{ backgroundImage: 'url(' + programmScreensList[currentProgrammScreen].url + ')' }"></div>
                    <img class="slider-slide slider-slide-absolute slider-slide-right" :src="programmScreensList[currentProgrammScreen+1].url" v-if="programmScreensList[currentProgrammScreen+1]">
                </div>

                <p class="slider-description">{{ programmScreensList[currentProgrammScreen].description }}</p>
            </div>
        </modal-template>

        <!-- конец модальных окон -->

    </section>
</template>

<script>

import modalTemplate from '@/components/functional/modalWIndow.vue'


    export default {
        data() {
            return {
                // статус модального окна. false - закрыто.
                programmScreensModalStatus: false,

                // id текущего скрина для полного просмотра фотографий
                currentProgrammScreen: 0,

                programmScreensList: [
                    {
                        url: 'https://carscats.ru/bitrix/templates/landing/img/crc/crc01.jpg',
                        description: 'Звание лучшей городской модели британцы отдали Hyundai i10 в возрасте от 1 до 3 лет, а компактного автомобиля — хетчбэку Ford Fiesta 2007—2010 годов выпуска. Главную награду в категории «семейная машина» забрал трехлетний SEAT Leon, «компактный SUV» — шестилетний Nissan Qashqai.',
                        id: '1'
                    },
                    {
                        url: 'https://cdnimg.rg.ru/img/content/155/89/32/2_121_d_850.jpg',
                        description: 'Mazda CX-5 2011—2013 года стала лучшим большим SUV, а Audi Q7, выпущенная после 2015-го, — лучшим люксовым кроссовером. В категории минивэнов одержал победу Citroёn C3 Picasso в возрасте 7—10 лет, в н',
                        id: '2'
                    },
                    {
                        url: 'https://www.autostat.ru/application/includes/blocks/big_photo/images/cache/000/066/555/aee01da0-670-0.jpg',
                        description: 'tate тех же годов. Самым привлекательным «горячим» хетчем жюри назвало Ford Fiesta ST 1—3 лет, кабриолетом — BMW Z4 2007—2010 годов, купе — Audi TT 2011—2013-х.',
                        id: '3'
                    },
                    {
                        url: 'http://www.vladtime.ru/uploads/posts/2017-01/1483689641_avto.jpg',
                        description: 'Audi R8 в возрасте 7—10 лет, согласно результатам, лучший спортивный автомобиль; Renault Zoe 4—6 лет — лучшая экологически чистая модель.',
                        id: '4'
                    },
                    {
                        url: 'https://www.avtovzglyad.ru/media/article/2-308.17.jpg.740x555_q85_box-162%2C0%2C1465%2C977_crop_detail_upscale.jpg',
                        description: 'В категориях «премиальный автомобиль» и «люксовый автомобиль» победили седаны BMW 3-й и 5-й серии.',
                        id: '5'
                    },
                    {
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtn03AQvIDLBh7bws93t7gA0AnwqLyf1SyOwvEfJFcSSe0XTwB',
                        description: 'Стоит отметить, что в лидерах также оказались хетчбэк KIA Cee’d в возрасте от 4 до 6 лет (номинация «семейный автомобиль») и Sorento Prime 1—3 лет («большой кроссовер»).',
                        id: '6'
                    },
                ],

                // текущий таб
                activeLink: 1,

                // заголовок, типо слоган на первом экране
                firstScreenHeader: 'НАШИ РЕШЕНИЯ ДЛЯ АВТОБИЗНЕСА'
            }
        },
        methods: {
            changeSlide(direction) {
                if (direction === 'next') {
                    if (this.currentProgrammScreen !== this.programmScreensList.length) {
                        this.currentProgrammScreen++
                    }
                } else {
                    if (this.currentProgrammScreen !== 0) {
                        this.currentProgrammScreen--
                    }
                }
            },
            cutText(maxSize, text) {
                let filtredText = text
                if (text.length > maxSize) {
                    filtredText = text.slice(0, maxSize) + '...'
                }
                return filtredText
            },
            closeModalProgrammScreens() {
                this.programmScreensModalStatus = false
            },
            openProgrammScreensModal(index) {
                this.currentProgrammScreen = index
                this.programmScreensModalStatus = true
            },
            onMenuLink(number) {
                this.activeLink = number
            },
            lkLink() {
                if (this.isUserLogIn) {
                    return '/personalarea/accounts'
                } else {
                    return '/personalarea/authorization'
                }
            }
        },
        components: {
            modalTemplate
        },
        computed: {
            isUserLogIn() {
                return this.$store.getters.isUserLogIn
            }
        },
        mounted() {
            var firstSection = document.getElementById('first');
            var firstSectionBot = firstSection.getBoundingClientRect().bottom + window.pageYOffset - 180;

            var secondSection = document.getElementById('second');
            var secondSectionBot = secondSection.getBoundingClientRect().bottom + window.pageYOffset - 180;

            var thirstSection = document.getElementById('thirst');
            var thirstSectionBot = thirstSection.getBoundingClientRect().bottom + window.pageYOffset - 180;

            var that = this

            window.onscroll = function() {
                if (window.pageYOffset < firstSectionBot) {
                    that.onMenuLink(1)
                } else if (window.pageYOffset < secondSectionBot) {
                    that.onMenuLink(2)
                } else if (window.pageYOffset < thirstSectionBot) {
                    that.onMenuLink(3)
                } else {
                    that.onMenuLink(4)
                }
            }

        }
    }
</script>

<style scoped>
section {
    scroll-behavior: smooth; 
}
#second, #thirst, #four {
    padding-top: 80px;
	margin-top: -80px;
	-webkit-background-clip: content-box;
	background-clip: content-box;
    /* scroll-behavior: smooth;  */
}
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
.menu-top-content .logo img {
    cursor: pointer;
}
.menu-top-links a {
    margin-right: 10px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    padding: 8px 20px;
    border-radius: 20px;
    width: 120px;
    display: inline-block;


}
.menu-top-links a.active {
    background-color: #28446F;
    color:#fff;
}



.container {
    text-align: center;
    position: relative;
    scroll-behavior: smooth;
    
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
    user-select: none;
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
.programm-screens-gallery-item-image {
    width: 325px;
    height: 195px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #aeaeae20;
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
    user-select: none;
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


/* стили модального окна  */
.slider {
    position: relative;
    height: 500px;

}


.slider-slide {
    height: 500px;
}
.slider-slide-current {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 800px;
    margin: 0 auto;
}
.slider-slide-absolute {
    position: absolute;
    display: none;
}
.slider-slide-left {
    left: -40%;
}
.slider-slide-right {
    right: -40%;
}

.slider-btn {
    height: 100%;
    width: 20%;
    position: absolute;
    cursor: pointer;
}
.slider-btn-next {
    right: 0;
}

.slider-btn::after {
    content: '';
    width:50px;
    height: 50px;
    position: absolute;
    top:50%;
    margin-top: -25px;
    padding: 10px;
    opacity: 0.1;
    background-color: #aeaeae;
    border-radius: 50%;
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: 15px 10px;
    background-image: url(../../img/right-arrow.svg)
}
.slider-btn:hover:after {
    opacity: 0.5;
}
.slider-btn-next::after {
    right: -20px;
}
.slider-btn-prev::after {
    left: -20px;
    transform: rotate(180deg);
}
.slider-btn-prev {
    left: 0;
}

.slider-description {
    margin-top: 40px;
    padding: 0 40px;
    text-align: left;
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