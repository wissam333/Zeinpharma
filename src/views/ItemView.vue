<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="item">
        <div class="item_grid" v-for="item in singleItem" :key="item.id" data-aos="fade-up">
            <div class="item_img">
                <div class="img-container">
                    <img :src="item.image" alt="">
                </div>
                <div class="basic-info">
                    <div class="info">
                        <h5>Dosage Form</h5> {{ item.Dosage_form }}
                    </div>
                    <div class="info">
                        <h5>Category</h5> {{ item.category }}
                    </div>
                    <div class="info">
                        <h5>Date</h5> {{ item.date }}
                    </div>
                </div>
            </div>
            <div class="item_content">
                <div class="description">
                    <h3>Name : {{ item.name }}</h3>
                    <h3>Commercial Name : {{ item.Commercial_name }}</h3>
                    <hr>
                    <h5>Drug Interactions</h5>
                    <p>{{ item.Drug_interactions }}</p>
                    <hr>
                    <h5>Side Effects</h5>
                    <ul>
                        <li v-for="effects in item.Effects">
                            <p>{{ effects }}</p>
                        </li>
                    </ul>
                    <hr>
                    <h5>Contraindications</h5>
                    <ul>
                        <li v-for="Contraindications in item.Contraindications">
                            <p>{{ Contraindications }}</p>
                        </li>
                    </ul>
                    <hr>
                    <h5>Related Products</h5>
                    <swiper data-aos="fade-up" data-aos-duration="1000" class="swiper" :modules="modules" :pagination="{
                        type: 'progressbar'
                    }" :breakpoints="breakpoints.swiperOptions.breakpoints" :space-between="0" @swiper="onSwiper"
                        @slideChange="onSlideChange">
                        // eslint-disable-next-line vue/valid-v-for
                        <swiper-slide class="related" v-for="Related in item.Related">
                            <div class="product-image"> <img :src="Related.image" alt=""> </div>
                            <div class="product-text">
                                <p class="text-center">{{ Related.name }}</p>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <AppFooter></AppFooter>
</template>

<script setup>
import AppFooter from '../components/golbal/AppFooter.vue';
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import meds from '../Fake Product Data/MOCK_DATA.json'
import { defineComponent } from 'vue'
// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const modules = [Pagination];
// end Import Swiper styles

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
            // 768px and up
            768: {
                slidesPerView: 4,
            },
            // 1024 and up
            1024: {
                slidesPerView: 3,
            },
        }
    }
})

const route = useRoute()
// import AOS
import AOS from 'aos'
onMounted(() => {
    AOS.init()
})

let singleItem = computed(() => {
    return meds.filter((item) => {
        if (item.id == route.params.id) {
            return item
        }
    })
})


</script>

<style lang="scss" scoped>
@import "../styles/style.scss";

.swiper {
    padding-top: 20px !important;
}

h5 {
    color: #283790;
    font-weight: bold;
    margin-bottom: 20px;
}

hr {
    margin: 1.5rem 0;
}

.item {
    padding: 100px;

    @media (max-width: 768px) {
        padding: 50px;
    }

    @media (max-width: 479px) {
        padding: 30px;
    }

    .item_grid {
        display: grid;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        column-gap: 50px;
        row-gap: 30px;

        @media (max-width: 1050px) {
            grid-template-columns: 1fr;
        }

        .item_img {
            width: 100%;

            .basic-info {
                display: flex;
                justify-content: space-between;

                @media (max-width: 479px) {
                    flex-direction: column;
                }

                .info {
                    margin-bottom: 20px;

                    h5 {
                        margin-bottom: 5px;
                    }
                }
            }

            .img-container {
                width: 500px;
                height: 500px;
                margin: auto auto 20px auto;

                @media (max-width: 768px) {
                    width: 300px;
                    height: 300px;
                }

                @media (max-width: 479px) {
                    width: 200px;
                    height: 200px;
                }

                img {
                    width: 100%;
                    height: 100%;
                }

            }
        }

        .item_content {
            .description {
                h3 {
                    font-weight: bold;
                }
            }

            .swiper {
                width: 550px;
                overflow-x: hidden;

                @media (max-width: 991px) {
                    width: 450px;
                }

                @media (max-width: 768px) {
                    width: 350px;
                }

                @media (max-width: 479px) {
                    width: 250px;
                }

                .related {
                    .product-image {
                        width: 100px;
                        margin: auto;

                        img {
                            width: 100px;
                        }
                    }
                }
            }
        }
    }
}
</style>