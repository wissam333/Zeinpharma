<template>
    <div class="product-slider container">
        <h4 class="">{{ $t("products.header") }}</h4>
        <swiper data-aos="fade-up" data-aos-duration="1000" class="swiper" :grabCursor="true" :pagination="{
            type: 'progressbar'
        }" :modules="modules" :breakpoints="breakpoints.swiperOptions.breakpoints" :space-between="10"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide class="item">
                <div>
                    <div class="product-image"> <img src="../../assets/products/product1.jpg" alt=""> </div>
                    <div class="product-text">{{ $t("products.product1") }}</div>
                </div>
            </swiper-slide>
            <swiper-slide class="item">
                <div class="product-image"> <img src="../../assets/products/product2.jpg" alt=""> </div>
                <div class="product-text">{{ $t("products.product2") }}</div>
            </swiper-slide>
            <swiper-slide class="item">
                <div class="product-image"> <img src="../../assets/products/product3.jpg" alt=""> </div>
                <div class="product-text">{{ $t("products.product3") }}</div>
            </swiper-slide>
            <swiper-slide class="item">
                <div class="product-image"> <img src="../../assets/products/product4.jpg" alt=""> </div>
                <div class="product-text">{{ $t("products.product4") }}</div>
            </swiper-slide>
            <swiper-slide class="item">
                <div class="product-image"> <img src="../../assets/products/product5.jpg" alt=""> </div>
                <div class="product-text">{{ $t("products.product5") }}</div>
            </swiper-slide>
            <swiper-slide class="item">
                <div class="product-image"> <img src="../../assets/products/product1.jpg" alt=""> </div>
                <div class="product-text">{{ $t("products.product6") }}</div>
            </swiper-slide>
            <swiper-slide class="item">
                <div class="product-image"> <img src="../../assets/products/product2.jpg" alt=""> </div>
                <div class="product-text">{{ $t("products.product7") }}</div>
            </swiper-slide>
            <swiper-slide class="item">
                <div class="product-image"> <img src="../../assets/products/product3.jpg" alt=""> </div>
                <div class="product-text">{{ $t("products.product8") }}</div>
            </swiper-slide>
            <swiper-slide class="item">
                <div class="product-image"> <img src="../../assets/products/product4.jpg" alt=""> </div>
                <div class="product-text">{{ $t("products.product9") }}</div>
            </swiper-slide>
            <swiper-slide class="item">
                <div class="product-image"> <img src="../../assets/products/product5.jpg" alt=""> </div>
                <div class="product-text">{{ $t("products.product10") }}</div>
            </swiper-slide>
        </swiper>
        <div class="go-to-products container">
            <router-link to="/ProductView/All" @click="activePage = 'Product'" type="button" class="btn btn-success">{{
                $t("products.button")
            }}</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineComponent } from 'vue'
// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
const modules = [Pagination];
// end Import Swiper styles
// store
import { productsFilter } from "../../stores/counter";
import { storeToRefs } from "pinia";
//store fetch
let filter = productsFilter();
let { activePage } = storeToRefs(filter)

// swiper configuration
defineComponent({
    name: 'BreakPoints',
    components: {
        SwiperSlide,
        Swiper,
    },
})

const breakpoints = ref({
    swiperOptions: {
        breakpoints: {
            // 0px and up
            0: {
                slidesPerView: 2,
            },
            // 700px and up
            768: {
                slidesPerView: 3,
            },
            // 1024 and up
            1024: {
                slidesPerView: 4,
            },
        }
    }
})
// import AOS
import AOS from 'aos'
onMounted(() => {
    AOS.init()
})


</script>

<style lang="scss" scoped>
@import "../../styles/style.scss";

.swiper {
    padding-top: 40px !important;
}

.product-slider {
    margin-top: 160px;

    h4 {
        color: $baseColor;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .swiper {
        .item {
            .product-image {
                display: flex;
                align-items: center;
                width: 250px;
                height: 225px;
                margin: auto;

                @media (max-width: 1200px) {
                    width: 200px;
                    height: 175px;
                }

                @media (max-width: 768px) {
                    width: 150px;
                    height: 125px;
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .product-text {
                text-align: center;
                padding: 20px;
                color: #000;
                font-size: 18px;
                font-weight: bold;

                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }
    }
}

.go-to-products {
    display: flex;
    justify-content: flex-end;

    button {
        margin-top: 15px;
    }
}
</style>