<template>
    <div class="appNav">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../../assets/logo.png" alt="Zeinpharma">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink to="/" @click="activePage = 'Home'"
                                :class="activePage == 'Home' ? 'activePage' : ''">
                                <div v-if="mobile" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">{{
                                    $t("nav.Home") }}
                                </div>
                                <div v-else>{{ $t("nav.Home") }}</div>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/ProductView" @click="activePage = 'Product'"
                                :class="activePage == 'Product' ? 'activePage' : ''">
                                <div v-if="mobile" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                                    {{ $t("nav.Product") }}</div>
                                <div v-else>{{ $t("nav.Product") }}</div>
                            </RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <RouterLink to="NewsView" @click="activePage = 'News'"
                                :class="activePage == 'News' ? 'activePage' : ''" class="nav-link dropdown-toggle" href="#"
                                id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span v-if="mobile" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">{{
                                    $t("nav.News") }}</span>
                                <span v-else>{{ $t("nav.News") }}</span>
                            </RouterLink>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Latest News</a></li>
                                <li><a class="dropdown-item" href="#">Interviews</a></li>
                                <li><a class="dropdown-item" href="#">Events</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/PartnersView" @click="activePage = 'Partners'"
                                :class="activePage == 'Partners' ? 'activePage' : ''">
                                <div v-if="mobile" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                                    {{ $t("nav.Partners") }} </div>
                                <div v-else>{{ $t("nav.Partners") }}</div>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/JobsView" @click="activePage = 'Jobs'"
                                :class="activePage == 'Jobs' ? 'activePage' : ''">
                                <div v-if="mobile" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">{{
                                    $t("nav.Jobs") }}
                                </div>
                                <div v-else>{{ $t("nav.Jobs") }}</div>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/GalleryView" @click="activePage = 'Gallery'"
                                :class="activePage == 'Gallery' ? 'activePage' : ''">
                                <div v-if="mobile" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                                    {{ $t("nav.Gallery") }}</div>
                                <div v-else> {{ $t("nav.Gallery") }}</div>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/AboutView" @click="activePage = 'About Us'"
                                :class="activePage == 'About Us' ? 'activePage' : ''">
                                <div v-if="mobile" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                                    {{ $t("nav.About") }}</div>
                                <div v-else> {{ $t("nav.About") }}</div>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/ContactView" @click="activePage = 'Contact Us'"
                                :class="activePage == 'Contact Us' ? 'activePage' : ''">
                                <div v-if="mobile" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                                    {{ $t("nav.Contact") }}</div>
                                <div v-else>{{ $t("nav.Contact") }}</div>
                            </RouterLink>
                        </li>
                    </ul>
                    <LanguageToggleButton></LanguageToggleButton>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from "vue"
import LanguageToggleButton from '../LanguageToggleButton.vue';
//active page base color
let activePage = ref("Home")

//solving navbar collapse problem 
let mobile = ref(false)
onMounted(() => {
    window.addEventListener("resize", function () {
        window.matchMedia("(max-width: 991px)").matches ? mobile.value = true : mobile.value = false;
    })
})

</script>

<style lang="scss" scoped>
@import "../../styles/style.scss";

.appNav {
    height: 80px;

    nav {
        position: fixed;
        width: 100%;
        max-height: 100%;
        background-color: #fff !important;
        border-bottom: 1px solid #eee;
        box-shadow: 0px -8px 11px 0px;
        padding: 0;
        overflow-y: auto;
        overflow-x: hidden;
        z-index: 10000;

        .navbar-brand {
            width: 150px;

            img {
                width: 100%;
            }
        }

        .navbar-toggler {
            box-shadow: none !important;
            border: none !important;
        }

        .navbar-nav {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 80%;

            @media (max-width: 991px) {
                justify-content: center;
                width: 100%;
            }

            .nav-item {
                @media (max-width: 991px) {
                    width: 100%;
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                    text-align: center;
                }

                a {
                    text-decoration: none;
                    color: #000;
                    font-weight: 600;
                    font-size: 17px;

                    &:hover,
                    &.activePage {
                        color: $baseColor;
                    }
                }
            }
        }
    }
}
</style>