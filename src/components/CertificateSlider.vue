<template>
    <swiper data-aos="fade-down" data-aos-duration="1000" :effect="'coverflow'" initialSlide="1.5" :grabCursor="true"
        :centeredSlides="true" :slidesPerView="'3'" :coverflowEffect="{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        }" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="certificate-content">
                <img src="../assets/ISO.webp" alt="">
                <p>ISO 14001:2015</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="certificate-content">
                <img src="../assets/ISO2.webp" alt="">
                <p>ISO 9001:2015</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="certificate-content">
                <img src="../assets//med.webp" alt="">
                <p>Excellent Medicine</p>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCoverflow],
        };
    },
};
</script>
<style lang="scss" scoped>
.certificate-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
        width: 125px;
    }

    @media (max-width: 991px) {
        width: 100px;
    }

    @media (max-width: 768px) {
        width: 75px;
        font-size: 12px;
    }

    @media (max-width: 479px) {
        width: 50px;
        font-size: 8px;
    }

    p {
        color: #fff;
        padding: 8px;
    }

    img {
        display: flex;
        flex-direction: column;
        width: 150px;

        @media (max-width: 1200px) {
            width: 125px;
        }

        @media (max-width: 991px) {
            width: 100px;
        }

        @media (max-width: 768px) {
            width: 75px;
        }

        @media (max-width: 479px) {
            width: 50px;
        }
    }
}
</style>
  