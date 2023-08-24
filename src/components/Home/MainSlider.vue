<template>
    <swiper :pagination="{
        dynamicBullets: true,
        clickable: true
    }" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="overlay"></div>
            <div class="img-contain container" :class="locale == 'ar' ? 'ar-reverse' : ''">
                <div class="left-content" :class="locale == 'ar' ? 'ar' : ''">
                    <h4 data-aos="zoom-out" data-aos-duration="1000">{{
                        $t("mainSlider.mainText") }}</h4>
                    <p></p>
                </div>
                <div class="right-content" :class="locale == 'ar' ? 'justify-content-start' : ''">
                    <div class="certificate">
                        <CertificateSlider></CertificateSlider>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="overlay"></div>
            <div class="img-contain container" :class="locale == 'ar' ? 'ar-reverse' : ''">
                <div class="left-content" :class="locale == 'ar' ? 'ar' : ''">
                    <h4>{{
                        $t("mainSlider.mainText") }}</h4>
                    <p></p>
                </div>
                <div class="right-content" :class="locale == 'ar' ? 'justify-content-start' : ''">
                    <div class="certificate">
                        <CertificateSlider></CertificateSlider>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="overlay"></div>
            <div class="img-contain container" :class="locale == 'ar' ? 'ar-reverse' : ''">
                <div class="left-content" :class="locale == 'ar' ? 'ar' : ''">
                    <h4>{{
                        $t("mainSlider.mainText") }}</h4>
                    <p></p>
                </div>
                <div class="right-content" :class="locale == 'ar' ? 'justify-content-start' : ''">
                    <div class="certificate">
                        <CertificateSlider></CertificateSlider>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="overlay"></div>
            <div class="img-contain container" :class="locale == 'ar' ? 'ar-reverse' : ''">
                <div class="left-content" :class="locale == 'ar' ? 'ar' : ''">
                    <h4>{{
                        $t("mainSlider.mainText") }}</h4>
                    <p></p>
                </div>
                <div class="right-content" :class="locale == 'ar' ? 'justify-content-start' : ''">
                    <div class="certificate">
                        <CertificateSlider></CertificateSlider>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CertificateSlider from './CertificateSlider.vue';
import { useI18n } from 'vue-i18n'
// import required modules
import { Pagination } from 'swiper/modules';
export default {
    components: {
        Swiper,
        SwiperSlide,
        CertificateSlider
    },
    setup() {
        let { locale } = useI18n()
        return {
            modules: [Pagination],
            locale
        };
    },
};
</script>

<style lang="scss" scoped>
@import "../../styles/style.scss";

.swiper-slide {
    position: relative;
    width: 100%;
    height: 610px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (max-width: 1200px) {
        height: 500px;
    }

    @media (max-width: 991px) {
        height: 400px;
    }

    @media (max-width: 768px) {
        height: 300px;
    }

    @media (max-width: 479px) {
        height: 200px;
    }

    &:nth-child(1) {
        background-image: url("../../assets/main2.webp");
    }

    &:nth-child(2) {
        background-image: url("../../assets/main6.webp");
    }

    &:nth-child(3) {
        background-image: url("../../assets/main3.webp");
    }

    &:nth-child(4) {
        background-image: url("../../assets/main5.webp");
    }

    .overlay {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.4;
        z-index: 0;

    }
}

.img-contain {
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .left-content {
        width: 50%;
        z-index: 1;

        h4 {
            color: #fff;
            font-weight: bold;
            font-size: 60px;
            margin-bottom: 40px;

            @media (max-width: 1200px) {
                font-size: 50px;
            }

            @media (max-width: 991px) {
                font-size: 40px;
            }

            @media (max-width: 768px) {
                font-size: 30px;
            }

            @media (max-width: 479px) {
                font-size: 20px;
            }
        }

        p {
            color: #fff;
            font-size: 20px;
            font-weight: 600;
        }
    }

    .right-content {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-end;

        .certificate {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
}
</style>