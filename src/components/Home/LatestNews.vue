<template>
    <div class="container">
        <h4>{{ $t("latestNews.header") }}</h4>
        <div class="row">
            <div class="news col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
                <div class="news-image" :class="locale == 'ar' ? 'ar-flow' : ''"> <img src="../../assets/news.webp"
                        alt="">
                </div>
                <div class="news-text" :class="locale == 'ar' ? 'ar ar-flow' : ''">
                    <h5>{{ $t("latestNews.newsTitle") }}</h5>
                    <p>{{ $t("latestNews.newsText") }}</p>
                    <div class="info" :class="locale == 'ar' ? 'ar' : ''">
                        2023/3/23 (120)
                    </div>
                    <div class="go-to-products">
                        <button type="button" class="btn btn-success">{{ $t("latestNews.button") }}</button>
                    </div>
                </div>
            </div>
            <div class="news col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
                <div class="news-image" :class="locale == 'ar' ? 'ar-flow' : ''"> <img src="../../assets/news.webp" alt="">
                </div>
                <div class="news-text" :class="locale == 'ar' ? 'ar ar-flow' : ''">
                    <h5>{{ $t("latestNews.newsTitle") }}</h5>
                    <p>{{ $t("latestNews.newsText") }}</p>
                    <div class="info" :class="locale == 'ar' ? 'ar' : ''">
                        2023/3/23 (120)
                    </div>
                    <div class="go-to-products">
                        <button type="button" class="btn btn-success">{{ $t("latestNews.button") }}</button>
                    </div>
                </div>
            </div>
            <div class="news col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
                <div class="news-image" :class="locale == 'ar' ? 'ar-flow' : ''"> <img src="../../assets/news.webp"
                        alt="">
                </div>
                <div class="news-text" :class="locale == 'ar' ? 'ar-flow ar' : ''">
                    <h5>{{ $t("latestNews.newsTitle") }}</h5>
                    <p>{{ $t("latestNews.newsText") }}</p>
                    <div class="info" :class="locale == 'ar' ? 'ar' : ''">
                        2023/3/23 (120)
                    </div>
                    <div class="go-to-products">
                        <button type="button" class="btn btn-success">{{ $t("latestNews.button") }}</button>
                    </div>
                </div>
            </div>
            <div class="news col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
                <div class="news-image" :class="locale == 'ar' ? 'ar-flow' : ''"> <img src="../../assets/news.webp" alt="">
                </div>
                <div class="news-text" :class="locale == 'ar' ? 'ar-flow ar' : ''">
                    <h5>{{ $t("latestNews.newsTitle") }}</h5>
                    <p>{{ $t("latestNews.newsText") }}</p>
                    <div class="info" :class="locale == 'ar' ? 'ar' : ''">
                        2023/3/23 (120)
                    </div>
                    <div class="go-to-products">
                        <button type="button" class="btn btn-success">{{ $t("latestNews.button") }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n'

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
    margin-bottom: 40px;

    h4 {
        color: $baseColor;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 80px;

        @media (max-width:768px) {
            font-size: 30px;
            margin-bottom: 30px;
        }
    }

    .news {
        margin-bottom: 40px;

        .news-image {
            img {
                width: 100%;
                height: 100%;
                border: 5px solid $secondryColor;
                border-radius: 16px;

                @media (max-width: 768px) {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .news-text {
            h5 {
                font-weight: bold;
                margin-top: 10px;
            }

            p {
                width: 100%;
                margin-bottom: 5px;
                text-overflow: ellipsis;
                /* will make [...] at the end */
                white-space: nowrap;
                /* paragraph to one line */
                overflow: hidden;
                /* older browsers */
            }

            .info {
                font-size: 12px;
                text-align: left;
                color: #333;
                font-style: italic;

            }

            button {
                margin-top: 20px;
            }
        }
    }
}
</style>