<template>
    <footer class="container">
        <div class="row">
            <div class="logo col-sm-4" data-aos="fade-up" data-aos-duration="1000">
                <div class="logo-img">
                    <img src="../../assets/logo2.svg" alt="">
                    <div class="logo-text">
                        <h2>ZEIN</h2>
                        <p>PHARMA</p>
                    </div>
                </div>
                <p>English is a compulsory language in many educational systems around the world. Learning English nowadays
                </p>
            </div>
            <div class="contact col-sm-8" data-aos="fade-up" data-aos-duration="1000">
                <div class="row">
                    <div class="contactCol adress col-lg-3 col-sm-6">
                        <div class="contact-title">
                            <i class="bi bi-house-fill"></i>
                            Adress
                        </div>
                        <p>Syria - Tartus - Safita</p>
                    </div>
                    <div class="contactCol phone col-lg-3 col-sm-6">
                        <div class="contact-title">
                            <i class="bi bi-telephone-fill"></i>
                            Phone
                        </div>
                        <p>
                            +963 43 7734882
                            <br>
                            +963 938 293929
                        </p>
                    </div>
                    <div class="contactCol email col-lg-3 col-sm-6">
                        <div class="contact-title">
                            <i class="bi bi-envelope-at-fill"></i>
                            E-mail
                        </div>
                        <p>info@zein-pharma.com</p>
                    </div>
                    <div class="contactCol fax col-lg-3 col-sm-6">
                        <div class="contact-title">
                            <i class="bi bi-pass-fill"></i>
                            Fax
                        </div>
                        <p>+963 43 3222</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="endFooter">
        <p>Copyright © 2023 Zeinpharma. All Rights Reserved.</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
// import { useI18n } from 'vue-i18n'

// let { locale } = useI18n()
// import AOS
import AOS from 'aos'
onMounted(() => {
    AOS.init()
})
</script>

<style lang="scss" scoped>
@import "../../styles/style.scss";

.container {
    .logo {
        margin-top: 40px;

        .logo-img {
            display: flex;
            align-items: flex-end;

            img {
                width: 50px;
            }

            .logo-text {
                display: flex;
                align-items: center;
                flex-direction: column;
                line-height: 5px;

                h2 {
                    font-size: 33px;
                    letter-spacing: 5px;
                    font-weight: bold;
                    color: $secondryColor;
                    margin: 0;
                }

                p {
                    font-size: 12px;
                    color: #2bb673;
                    margin: 0;
                    font-family: emoji;
                    font-weight: 500;
                    letter-spacing: 7px;
                }
            }
        }

        p {
            color: #4c4c4c;
            font-size: 14px;
            margin-bottom: 40px;
            margin-top: 30px;
        }
    }

    .contact {
        margin-top: 40px;

        .contactCol {
            color: #333;
            margin-bottom: 20px;

            .contact-title {
                color: $secondryColor;
                margin-bottom: 10px;
                font-weight: bold;

                i {
                    font-size: 20px;
                }
            }

            p {}
        }
    }
}

.endFooter {
    background-color: #2bb673;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    margin: 0;
}
</style>