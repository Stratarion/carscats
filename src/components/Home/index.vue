<template>
    <section class="container">
        <div class="menu">
            <div class="menu-btns">
                <div class="menu-btns-close hiden-menu" @click="menuOpen = true" :class="{active: !menuOpen}"><img src="@/img/icons/close.svg"/></div>
                <div class="menu-btns-open hiden-menu" @click="menuOpen = false" :class="{active: menuOpen}"><img src="@/img/icons/menu.svg"/></div>
            </div>
            <div class="menu-top" :class="{'hiden-menu-top': menuOpen}">

                <div class="menu-top-content">
                    <router-link tag="div" class="logo" to="/" >
                        <img src="@/img/logo.gif" alt="">
                    </router-link>
                    <div >
                    </div>
                    <div class="menu-top-links">
                        <a href="#first" :class="{'active': activeLink == 1}" @click="onMenuLink(1)">Тарифы</a>
                        <a href="#second" :class="{'active': activeLink == 2}" @click="onMenuLink(2)">Программа</a>
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
                    <!-- <img class="cards-services-item-logotype" src="https://carscats.ru/bitrix/templates/landing/img/epc-logo.png" alt=""> -->
                    <h3 class="cards-services-item-header">Диллерские каталоги</h3>
                    <p class="cards-services-item-description">Наша организация предоставляет доступ к дилерским каталогам для подбора автозапчастей</p>
                    <button class="cards-services-item-btn">Купить</button>
                </div>
                <div class="cards-services-item">
                    <!-- <img class="cards-services-item-logotype" src="https://carscats.ru/bitrix/templates/landing/img/epc-logo.png" alt=""> -->
                    <h3 class="cards-services-item-header">Высокая скорость</h3>
                    <p class="cards-services-item-description">Высокая скорость работы каталогов на наших серверах</p>
                    <button class="cards-services-item-btn">Купить</button>
                </div>
                <div class="cards-services-item">
                    <!-- <img class="cards-services-item-logotype" src="https://carscats.ru/bitrix/templates/landing/img/epc-logo.png" alt=""> -->
                    <h3 class="cards-services-item-header">24/7</h3>
                    <p class="cards-services-item-description">Круглосуточная работа отдела продаж и службы техподдержки</p>
                    <button class="cards-services-item-btn">Купить</button>
                </div>
                <div class="cards-services-item">
                    <!-- <img class="cards-services-item-logotype" src="https://carscats.ru/bitrix/templates/landing/img/epc-logo.png" alt=""> -->
                    <h3 class="cards-services-item-header">Минимальные цены</h3>
                    <p class="cards-services-item-description">Минимальные цены на рынке, за высокое качество, стабильность и круглосуточную техподдержку.</p>
                    <button class="cards-services-item-btn">Купить</button>
                </div>
                <div class="cards-services-item">
                    <!-- <img class="cards-services-item-logotype" src="https://carscats.ru/bitrix/templates/landing/img/epc-logo.png" alt=""> -->
                    <h3 class="cards-services-item-header">Каталоги по ремонту</h3>
                    <p class="cards-services-item-description">Мы не берем дополнительную плату за каталоги по ремонту</p>
                    <button class="cards-services-item-btn">Купить</button>
                </div>
            </div>
        </div>
        <section id='first'>
            

            

            <div class="plans">
                <h3 class="plans-header">тарифы</h3>
                <div class="plans-header-lens"></div>
                <p class="plans-description">Вы можете выбрать подходящий именно Вам тарифный план</p>
                <div class="plans-list">
                    <div class="plans-list-item">
                        <h3 class="plans-list-item-header">30 дней</h3>
                        <div class="plans-list-item-body">
                            <h4 class="plans-list-item-body-price">₽ 1200/мес</h4>
                            <h5 class="plans-list-item-body-option">Легковые</h5>
                            <h5 class="plans-list-item-body-option">Грузовые</h5>
                            <h5 class="plans-list-item-body-option">СпецТехника</h5>
                            <h5 class="plans-list-item-body-option">Ремонт</h5>
                            <div class="plans-list-item-body-btn">Купить</div>
                        </div>
                    </div>
                    <div class="plans-list-item">
                        <h3 class="plans-list-item-header">90 дней</h3>
                        <div class="plans-list-item-body">
                            <h4 class="plans-list-item-body-price">₽ 3300/мес</h4>
                            <h5 class="plans-list-item-body-option">Легковые</h5>
                            <h5 class="plans-list-item-body-option">Грузовые</h5>
                            <h5 class="plans-list-item-body-option">СпецТехника</h5>
                            <h5 class="plans-list-item-body-option">Ремонт</h5>
                            <div class="plans-list-item-body-btn">Купить</div>
                        </div>
                    </div>
                    <div class="plans-list-item">
                        <h3 class="plans-list-item-header">180 дней</h3>
                        <div class="plans-list-item-body">
                            <h4 class="plans-list-item-body-price">₽ 6000/мес</h4>
                            <h5 class="plans-list-item-body-option">Легковые</h5>
                            <h5 class="plans-list-item-body-option">Грузовые</h5>
                            <h5 class="plans-list-item-body-option">СпецТехника</h5>
                            <h5 class="plans-list-item-body-option">Ремонт</h5>
                            <div class="plans-list-item-body-btn">Купить</div>
                        </div>
                    </div>
                    <div class="plans-list-item">
                        <h3 class="plans-list-item-header">360 дней</h3>
                        <div class="plans-list-item-body">
                            <h4 class="plans-list-item-body-price">₽ 11000/мес</h4>
                            <h5 class="plans-list-item-body-option">Легковые</h5>
                            <h5 class="plans-list-item-body-option">Грузовые</h5>
                            <h5 class="plans-list-item-body-option">СпецТехника</h5>
                            <h5 class="plans-list-item-body-option">Ремонт</h5>
                            <div class="plans-list-item-body-btn">Купить</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
        <section id='second'>
            <div class="download-instructions">
                <h2>Программа</h2>
                <div class="download-instructions-body">
                    <p class="download-instructions-body-description">Чтобы получить доступ к каталогам, скачайте программу по этой ссылке</p>
                    <a href="/src/files/Screenshot_1.jpg"  class="download-instructions-body-play">
                        <img src="@/img/download.svg" alt="">
                    </a>
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
            <div class="contacts">
                <div class="contacts-left">
                    <h2 class="contacts-left-header">Контакты</h2>
                    <p class="contacts-left-row">8-800-500-80-14 <b>звонок бесплатный</b></p>
                    <p class="contacts-left-row"><b>Отдел тех. поддержки:</b> 8(499)686-03-18</p>
                    <p class="contacts-left-row"><b>e-mail:</b> info@auto-soft.cc</p>
                    <p class="contacts-left-row"><b>ICQ:</b> 609-622-969</p>
                </div>

                <div class="contacts-right">
                    <input type="text" placeholder="Ваше имя" v-model="feedbackName">
                    <input type="text" placeholder="Ваша почта" v-model="feedbackMail">
                    <input type="text" placeholder="Ваш телефон" v-model="feedbakPhone">
                    <textarea rows="6" placeholder="Сообщение" v-model="feedbackText"></textarea>
                    <div class="contacts-right-send" @click="sendFeedback">Отправить</div>
                </div>


            </div>
            <div class="footer">
                <a class="footer-link" href="">Договор оферты</a>
                <a class="footer-link" href="">Политика конфеденциальности</a>
                <p class="footer-text">2019 © auto-soft.cc</p>
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
import admin from '@/services/admin';

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
                firstScreenHeader: 'НАШИ РЕШЕНИЯ ДЛЯ АВТОБИЗНЕСА',

                feedbackText: '',
                feedbackMail: '',
                feedbackName: '',
                feedbakPhone: '',

                // меню адаптива
                menuOpen: false
            

                
            }
        },
        methods: {
            async sendFeedback() {
                let params = {
                    sendler: this.feedbackMail,
                    text: this.feedbackText,
                    name: this.feedbackName,
                    phone: this.feedbakPhone
                }
                await admin.feedback(params).then(() => {
                    this.feedbackMail = ''
                    this.feedbackText = ''
                    this.feedbakPhone = ''
                    this.feedbackName = ''
                })
            },

            dowloadApplication() {
                
            },

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
                return this.$store.user ? true : false
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

<style lang="scss" scoped>
$base-color: rgb(119, 54, 0);

section {
    scroll-behavior: smooth; 
}
#first {
    padding-top: 10px;
	margin-top: -10px;
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

    &-top {
        padding: 10px 30px;
        background: #fff;
        box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.06);

        &-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 90%;
            margin: 0 auto;

            .logo img {
                cursor: pointer;
                width: 380px;
            }

            .userroom a{
                text-decoration: none;
                color:  $base-color;
            }
        }

        &-links {

            a {
                margin-right: 10px;
                cursor: pointer;
                text-decoration: none;
                color: black;
                padding: 8px 20px;
                border-radius: 20px;
                display: inline-block;

                .active {
                    background-color: $base-color;
                    color:#fff;
                }
            }
        }
    }
}

.hiden-menu {
    display: none;
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

    &-header {
        color: whitesmoke;
        text-shadow: -2px 0 #2F2E2C, 0 2px #2F2E2C, 2px 0 #2F2E2C, 0 -2px #2F2E2C;
        font-size: 52px;
        max-width: 700px;
        margin: 0 auto;
        user-select: none;
    }
}


.cards-services {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: -50px;
    flex-wrap: wrap;
    width: 100%;
}

.cards-services-item  {
    width: 250px;
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
    background-color: $base-color;
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
    background-color: $base-color;
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
    width: 260px;
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
    flex-direction: column;
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
    background: $base-color;
    position: relative;
    color: #fff;
    z-index: 1;
    border-radius: 30px;
    display: block;
    width: 115px;
    padding: 10px 30px;
    margin: 20px 0px 0px;
}

.download-instructions {
    background-color: $base-color;
    padding: 60px 0 70px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.download-instructions h2 {
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 30px;
}

.download-instructions-body {
    padding: 40px 0px 50px;
    border-top: 1px solid rgba(0,0,0,.1);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.download-instructions-body-description {
    width: 85%;
    font-size: 18px;
    font-weight: 400;
}

.download-instructions-body-play {
    cursor: pointer;
    margin: 50px 0 0;

    padding: 20px;
    border-radius: 50%;
    border: 1px solid #fff; 
}

.download-instructions-body-play img {
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


.contacts {
    display: flex;
    padding: 100px 150px 50px;
    background-color: $base-color;
    color: white;

    & > div {
        width: 50%;
    }

    &-left {

        &-header, &-row {
            text-align: left;
        }

        &-header {
            font-size: 32px;
            margin-bottom: 50px;
        }
        
        &-row {
            font-size: 24px;
            margin-bottom: 20px;
        } 
    }

    &-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        input {
            margin-bottom: 20px;
        }


        input, textarea {
            width: 100%;
            padding: 10px 15px;
            background: none;
            border: 2px solid #fff;
            color: #fff;
            font-size: 20px;
        }

        &-send {
            padding: 10px 15px;
            background-color: rgb(3, 255, 58);
            border: none;
            width: 200px;
            margin-top: 30px;
        }

    }
}


.footer {
    padding: 30px;
    background-color: #110202;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    &-link {
        text-decoration: none;
        color: #fff;
        margin: 0 10px 0 0;
        padding: 0 10px;
        border-right: 1px solid #fff;
    }
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

@media screen and (max-width: 1455px) {

    .menu {

        &-top {
            padding: 8px 23px;

            &-content {

                .logo img {
                    cursor: pointer;
                    width: 270px;
                }

                .userroom a{
                    text-decoration: none;
                    color:  $base-color;
                    font-size: 14px;
                }
            }

            &-links {

                a {
                    margin-right: 8px;
                    font-size: 14px;
                    padding: 6px 12px;
                    border-radius: 20px;
                }
            }
        }
    }
    
    .first-screen {
        padding-top: 100px;
        padding-bottom: 20px;
        &-header {
            font-size: 42px;
        }
    }

    .cards {

        &-services {
            position: relative;

            &-item {
                width: 180px;
                height: 320px;

                &-header {
                    font-size: 16px;
                }

                &-description {
                    font-size: 14px;
                }
            }
        }
    }
    
    
    .plans-header {
        font-size: 32px;
        margin: 80px 0px 0px;
    }

    .plans-header-lens {
        width: 50px;
    }

    .plans-description {
        font-size: 16px;
        margin: 15px 0 23px;
    }

    .plans-list {
        padding: 0 40px;
    }

    .plans-list-item {
        padding: 0px 0px 30px 0px;
        margin: 0 0 23px 0;
        width: 200px;
    }

    .plans-list-item-header {

        padding: 20px 15px;
        font-size: 20px;
    }

    .plans-list-item-body-price {
        font-size: 22px;
        margin: 20px 0 10px;
    }

    .plans-list-item-body-option {
        padding: 8px;
        font-size: 12px;
    }

    .plans-list-item-body-btn {
        width: 100px;
        padding: 10px 20px;
        margin: 15px 0px 0px;
        font-size: 14px;
    }

    .download-instructions {
        padding: 48px 0 56px;
    }

    .download-instructions h2 {
        font-size: 32px;
        margin-bottom: 22px;
    }

    .download-instructions-body {
        padding: 30px 0px 32px;
    }

    .download-instructions-body-description {
        font-size: 16px;
    }

    .download-instructions-body-play {
        margin: 40px 0 0;
        padding: 15px;
    }

    .download-instructions-body-play img {
        width: 38px;
    }


    .programm-screens {
        padding: 40px 0;
    }
    .programm-screens-header {
        font-size: 32px;
        margin-bottom: 15px;
    }
    .programm-screens-line {
        width: 56px;
    }
    .programm-screens-desription {
        font-size: 15px;
        margin: 23px 0;
        padding: 0 15px;

    }
    .programm-screens-gallery {
        padding: 40px 0px;
        max-width: 800px;

    }
    .programm-screens-gallery-item {
        width: 240px;
        height: 150px;
        margin: 0 0 23px 0;

    }
    .programm-screens-gallery-item-image {
        width: 240px;
        height: 150px;
    }
    .programm-screens-gallery-item-hover {
        font-size: 18px;
        padding: 8px;
    }

    .contacts {
        padding: 70px 110px 40px;

        &-left {

            &-header {
                font-size: 24px;
                margin-bottom: 38px;
            }
            
            &-row {
                font-size: 18px;
                margin-bottom: 15px;
            } 
        }

        &-right {

            input {
                margin-bottom: 15px;
            }

            input, textarea {
                padding: 8px 10px;
                font-size: 15px;
            }

            &-send {
                padding: 8px 10px;
                width: 150px;
                margin-top: 22px;
            }
        }
    }


    .footer {
        padding: 23px;

        &-link {
            margin: 0 8px 0 0;
            padding: 0 8px;
            font-size: 14px;
        }
    }

    /* стили модального окна  */
    .slider {
        position: relative;
        height: 380px;

    }


    .slider-slide {
        height: 380px;
    }
    .slider-slide-current {
        width: 600px;
    }


    .slider-btn::after {
        width:40px;
        height: 40px;
        margin-top: -20px;
        padding: 8px;
        border-radius: 50%;
        background-size: 38px;
        background-position: 10px 8px;
    }
    .slider-btn-next::after {
        right: -15px;
    }
    .slider-btn-prev::after {
        left: -15px;
    }

    .slider-description {
        margin-top: 30px;
        padding: 0 30px;
        font-size: 14px
    }

}

@media screen and (max-width: 1150px) {

    .menu {

        &-top {
            padding: 6px 17px;

            &-content {

                .logo img {
                    width: 180px;
                }

                .userroom a{
                    font-size: 8px;
                }
            }

            &-links {

                a {
                    margin-right: 6px;
                    font-size: 10px;
                    padding: 5px 8px;
                    border-radius: 15px;
                }
            }
        }
    }
    
    .first-screen {
        padding-top: 75px;
        padding-bottom: 15px;
        &-header {
            font-size: 32px;
        }
    }

    .cards {

        &-services {

            &-item {
                width: 170px;
                height: 260px;
                margin: 10px;

                &-header {
                    font-size: 14px;
                }

                &-description {
                    font-size: 12px;
                }

                &-btn {
                    font-size: 14px;
                    height: 40px;
                }
            }
        }
    }
    
    
    .plans-header {
        font-size: 24px;
        margin: 60px 0px 0px;
    }

    .plans-header-lens {
        width: 40px;
    }

    .plans-description {
        font-size: 14px;
        margin: 10px 0 17px;
    }

    .plans-list {
        padding: 0 30px;
    }

    .plans-list-item {
        padding: 0px 0px 23px 0px;
        margin: 0 0 17px 0;
        width: 170px;
    }

    .plans-list-item-header {

        padding: 15px 12px;
        font-size: 15px;
    }

    .plans-list-item-body-price {
        font-size: 16px;
        margin: 15px 0 9px;
    }

    .plans-list-item-body-option {
        padding: 6px;
        font-size: 9px;
    }

    .plans-list-item-body-btn {
        width: 80px;
        padding: 8px 15px;
        margin: 10px 0px 0px;
        font-size: 12px;
    }

    .download-instructions {
        padding: 38px 0 46px;
    }

    .download-instructions h2 {
        font-size: 24px;
        margin-bottom: 16px;
    }

    .download-instructions-body {
        padding: 24px 0px 24px;
    }

    .download-instructions-body-description {
        font-size: 14px;
    }

    .download-instructions-body-play {
        margin: 30px 0 0;
        padding: 12px;
    }

    .download-instructions-body-play img {
        width: 28px;
    }


    .programm-screens {
        padding: 30px 0;
    }
    .programm-screens-header {
        font-size: 24px;
        margin-bottom: 10px;
    }
    .programm-screens-line {
        width: 42px;
    }
    .programm-screens-desription {
        font-size: 11px;
        margin: 17px 0;
        padding: 0 11px;

    }
    .programm-screens-gallery {
        padding: 30px 0px;
        max-width: 600px;

    }
    .programm-screens-gallery-item {
        width: 180px;
        height: 110px;
        margin: 0 0 17px 0;

    }
    .programm-screens-gallery-item-image {
        width: 180px;
        height: 110px;
    }
    .programm-screens-gallery-item-hover {
        font-size: 16px;
        padding: 6px;
    }

    .contacts {
        padding: 50px 80px 30px;

        &-left {

            &-header {
                font-size: 18px;
                margin-bottom: 30px;
            }
            
            &-row {
                font-size: 14px;
                margin-bottom: 12px;
            } 
        }

        &-right {

            input {
                margin-bottom: 10px;
            }

            input, textarea {
                padding: 6px 8px;
                font-size: 12px;
            }

            &-send {
                padding: 6px 9px;
                width: 130px;
                margin-top: 18px;
            }
        }
    }


    .footer {
        padding: 17px;

        &-link {
            margin: 0 6px 0 0;
            padding: 0 6px;
            font-size: 11px;
        }
    }

    /* стили модального окна  */
    .slider {
        position: relative;
        height: 300px;

    }


    .slider-slide {
        height: 300px;
    }
    .slider-slide-current {
        width: 450px;
    }


    .slider-btn::after {
        width:40px;
        height: 40px;
        margin-top: -20px;
        padding: 8px;
        border-radius: 50%;
        background-size: 38px;
        background-position: 10px 8px;
    }
    .slider-btn-next::after {
        right: -15px;
    }
    .slider-btn-prev::after {
        left: -15px;
    }

    .slider-description {
        margin-top: 25px;
        padding: 0 25px;
        font-size: 12px
    }

}


@media screen and (max-width: 955px) {
    .hiden-menu-top {
        transform: translateY(-500px);
        opacity: 0;
    }
    .menu {
        
        &-top {
            padding: 6px 17px 20px;
            transition: all 0.4s;
            opacity: 1;
            &-content {
                display: flex;
                flex-direction: column;

                .logo img {
                    width: 180px;
                }

                .userroom a{
                    font-size: 8px;
                }
            }

            &-links {
                display: flex;
                flex-direction: column;

                a {
                    margin-right: 6px;
                    font-size: 10px;
                    padding: 5px 8px;
                    border-radius: 15px;
                }
            }
        }

        &-btns {

            div {
                width: 30px;
                height: 30px;
                position: absolute;
                top: 20px;
                opacity: 0;
                transition: 0.4s;

                &.active {
                    opacity: 1;
                }
            }

            &-close {
                right: 20px;

            }

            &-open {
                left: 20px;
                background-color: #fff;
                border-radius: 50%;
                border: 1px solid #000;
                padding: 7px;

            }
        }
    }

    .hiden-menu {
        display: block;
    }
    
    .first-screen {
        padding-top: 4vw;
        padding-bottom: 1.2vw;
        &-header {
            font-size: 2em;
            padding: 0 10vw;
        }
    }

    .cards {

        &-services {

            &-item {
                width: 27vw;
                min-width: 200px;
                max-width: 300px;
                height: 25vw;
                min-height: 250px;
                margin: 10px;

                &-header {
                    font-size: 1.0em;
                }

                &-description {
                    font-size: 0.8em;
                }

                &-btn {
                    font-size: 0.8em;
                    height: 4vw;
                    min-height: 20px;

                }
            }
        }
    }
    
    
    .plans-header {
        font-size: 24px;
        margin: 60px 0px 0px;
    }

    .plans-header-lens {
        width: 40px;
    }

    .plans-description {
        font-size: 14px;
        margin: 10px 0 17px;
    }

    .plans-list {
        padding: 0 30px;
    }

    .plans-list-item {
        padding: 0px 0px 23px 0px;
        margin: 0 0 17px 0;
        width: 170px;
    }

    .plans-list-item-header {

        padding: 15px 12px;
        font-size: 15px;
    }

    .plans-list-item-body-price {
        font-size: 16px;
        margin: 15px 0 9px;
    }

    .plans-list-item-body-option {
        padding: 6px;
        font-size: 9px;
    }

    .plans-list-item-body-btn {
        width: 80px;
        padding: 8px 15px;
        margin: 10px 0px 0px;
        font-size: 12px;
    }

    .download-instructions {
        padding: 38px 0 46px;
    }

    .download-instructions h2 {
        font-size: 24px;
        margin-bottom: 16px;
    }

    .download-instructions-body {
        padding: 24px 0px 24px;
    }

    .download-instructions-body-description {
        font-size: 14px;
    }

    .download-instructions-body-play {
        margin: 30px 0 0;
        padding: 12px;
    }

    .download-instructions-body-play img {
        width: 28px;
    }


    .programm-screens {
        padding: 30px 0;
    }
    .programm-screens-header {
        font-size: 24px;
        margin-bottom: 10px;
    }
    .programm-screens-line {
        width: 42px;
    }
    .programm-screens-desription {
        font-size: 11px;
        margin: 17px 0;
        padding: 0 11px;

    }
    .programm-screens-gallery {
        padding: 30px 0px;
        max-width: 600px;

    }
    .programm-screens-gallery-item {
        width: 180px;
        height: 110px;
        margin: 0 0 17px 0;

    }
    .programm-screens-gallery-item-image {
        width: 180px;
        height: 110px;
    }
    .programm-screens-gallery-item-hover {
        font-size: 16px;
        padding: 6px;
    }

    .contacts {
        padding: 50px 80px 30px;
        justify-content: center;
        flex-wrap: wrap;
        &-left, &-right {
            min-width: 300px;
        }

        &-left {

            &-header {
                font-size: 18px;
                margin-bottom: 30px;
            }
            
            &-row {
                font-size: 14px;
                margin-bottom: 12px;
            } 
        }

        &-right {
            margin-top: 5vw;

            input {
                margin-bottom: 10px;
            }

            input, textarea {
                padding: 6px 8px;
                font-size: 12px;
            }

            &-send {
                padding: 6px 9px;
                width: 100px;
                margin-top: 18px;
                font-size: 14px;
            }
        }
    }


    .footer {
        padding: 17px;

        &-link {
            margin: 0 6px 0 0;
            padding: 0 6px;
            font-size: 11px;
        }
    }

    /* стили модального окна  */
    .slider {
        position: relative;
        height: 40vw;

    }


    .slider-slide {
        height: 40vw;
    }
    .slider-slide-current {
        width: 55vw;
    }


    .slider-btn::after {
        width:40px;
        height: 40px;
        margin-top: -20px;
        padding: 8px;
        border-radius: 50%;
        background-size: 38px;
        background-position: 10px 8px;
    }
    .slider-btn-next::after {
        right: -15px;
    }
    .slider-btn-prev::after {
        left: -15px;
    }

    .slider-description {
        margin-top: 25px;
        padding: 0 25px;
        font-size: 12px
    }

}

@media screen and (max-width: 480px) {
    .hiden-menu-top {
        transform: translateY(-500px);
        opacity: 0;
    }
    .menu {
        
        &-top {
            padding: 6px 17px 20px;
            transition: all 0.4s;
            opacity: 1;
            &-content {
                display: flex;
                flex-direction: column;

                .logo img {
                    width: 180px;
                }

                .userroom a{
                    font-size: 8px;
                }
            }

            &-links {
                display: flex;
                flex-direction: column;

                a {
                    margin-right: 6px;
                    font-size: 10px;
                    padding: 5px 8px;
                    border-radius: 15px;
                }
            }
        }

        &-btns {

            div {
                width: 30px;
                height: 30px;
                position: absolute;
                top: 20px;
                opacity: 0;
                transition: 0.4s;

                &.active {
                    opacity: 1;
                }
            }

            &-close {
                right: 20px;

            }

            &-open {
                left: 50px;
                background-color: #fff;
                border-radius: 50%;
                border: 1px solid #000;
                padding: 7px;

            }
        }
    }

    .hiden-menu {
        display: block;
    }
    
    .first-screen {
        padding-top: 4vw;
        padding-bottom: 1.2vw;
        &-header {
            font-size: 2em;
            padding: 0 10vw;
        }
    }

    .cards {

        &-services {

            &-item {
                width: 27vw;
                min-width: 200px;
                max-width: 300px;
                height: 25vw;
                min-height: 250px;
                margin: 10px;

                &-header {
                    font-size: 1.0em;
                }

                &-description {
                    font-size: 0.8em;
                }

                &-btn {
                    font-size: 0.8em;
                    height: 4vw;
                    min-height: 20px;

                }
            }
        }
    }
    
    
    .plans-header {
        font-size: 24px;
        margin: 60px 0px 0px;
    }

    .plans-header-lens {
        width: 40px;
    }

    .plans-description {
        font-size: 14px;
        margin: 10px 0 17px;
    }

    .plans-list {
        padding: 0 30px;
    }

    .plans-list-item {
        padding: 0px 0px 23px 0px;
        margin: 0 0 17px 0;
        width: 170px;
    }

    .plans-list-item-header {

        padding: 15px 12px;
        font-size: 15px;
    }

    .plans-list-item-body-price {
        font-size: 16px;
        margin: 15px 0 9px;
    }

    .plans-list-item-body-option {
        padding: 6px;
        font-size: 9px;
    }

    .plans-list-item-body-btn {
        width: 80px;
        padding: 8px 15px;
        margin: 10px 0px 0px;
        font-size: 12px;
    }

    .download-instructions {
        padding: 38px 0 46px;
    }

    .download-instructions h2 {
        font-size: 24px;
        margin-bottom: 16px;
    }

    .download-instructions-body {
        padding: 24px 0px 24px;
    }

    .download-instructions-body-description {
        font-size: 14px;
    }

    .download-instructions-body-play {
        margin: 30px 0 0;
        padding: 12px;
    }

    .download-instructions-body-play img {
        width: 28px;
    }


    .programm-screens {
        padding: 30px 0;
    }
    .programm-screens-header {
        font-size: 24px;
        margin-bottom: 10px;
    }
    .programm-screens-line {
        width: 42px;
    }
    .programm-screens-desription {
        font-size: 11px;
        margin: 17px 0;
        padding: 0 11px;

    }
    .programm-screens-gallery {
        padding: 30px 0px;
        max-width: 600px;

    }
    .programm-screens-gallery-item {
        width: 180px;
        height: 110px;
        margin: 0 0 17px 0;

    }
    .programm-screens-gallery-item-image {
        width: 180px;
        height: 110px;
    }
    .programm-screens-gallery-item-hover {
        font-size: 16px;
        padding: 6px;
    }

    .contacts {
        padding: 50px 80px 30px;
        justify-content: center;
        flex-wrap: wrap;
        &-left, &-right {
            min-width: 300px;
        }

        &-left {

            &-header {
                font-size: 18px;
                margin-bottom: 30px;
            }
            
            &-row {
                font-size: 14px;
                margin-bottom: 12px;
            } 
        }

        &-right {
            margin-top: 5vw;

            input {
                margin-bottom: 10px;
            }

            input, textarea {
                padding: 6px 8px;
                font-size: 12px;
            }

            &-send {
                padding: 6px 9px;
                width: 17vw;
                margin-top: 18px;
                font-size: 14px;
            }
        }
    }


    .footer {
        padding: 17px;

        &-link {
            margin: 0 6px 0 0;
            padding: 0 6px;
            font-size: 11px;
        }
    }

    /* стили модального окна  */
    .slider {
        position: relative;
        height: 40vw;

    }


    .slider-slide {
        height: 40vw;
    }
    .slider-slide-current {
        width: 55vw;
    }


    .slider-btn::after {
        width:40px;
        height: 40px;
        margin-top: -20px;
        padding: 8px;
        border-radius: 50%;
        background-size: 38px;
        background-position: 10px 8px;
    }
    .slider-btn-next::after {
        right: -15px;
    }
    .slider-btn-prev::after {
        left: -15px;
    }

    .slider-description {
        margin-top: 25px;
        padding: 0 25px;
        font-size: 12px
    }

}





</style>