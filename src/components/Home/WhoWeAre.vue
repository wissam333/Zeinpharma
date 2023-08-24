<template>
    <div class="container">
        <div class="container-content row" :class="locale == 'ar' ? 'ar-reverse' : ''">
            <div class="content-image col-lg-6 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
                <img src="../../assets/who-we-are.webp" alt="">
            </div>
            <div :class="locale == 'ar' ? 'ar' : ''" class="content-text col-lg-6 col-sm-12">
                <section data-aos="fade-left" data-aos-duration="1000">
                    <h4>{{ $t("generalInfo.whoWeAre") }}</h4>
                    <p>{{ $t("generalInfo.paragraph") }}</p>
                </section>
                <br>
                <section data-aos="fade-left" data-aos-duration="1000">
                    <h4>{{ $t("generalInfo.whatWeDo") }}</h4>
                    <p>{{ $t("generalInfo.paragraph") }}</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue';

let { locale } = useI18n()

// import AOS
import AOS from 'aos'
onMounted(() => {
    AOS.init()
})

</script>

<style lang="scss" scoped>
@import "../../styles/style.scss";

.container {
    margin-top: 80px;

    .container-content {
        position: relative;

        .content-image {
            display: flex;
            justify-content: center;

            @media (max-width: 991px) {
                margin-bottom: 40px;
            }

            img {
                width: 450px;
                border: 5px solid $secondryColor;
                border-radius: 8px;

                @media (max-width: 479px) {
                    width: 300px;
                }

            }
        }

        .content-text {
            display: flex;
            justify-content: center;
            flex-direction: column;
            //for AOS 
            overflow-x: hidden;
            position: relative;

            h4 {
                font-size: 25px;
                font-weight: bold;
                color: $baseColor;
            }

            p {
                font-size: 20px;
            }
        }
    }
}
</style>