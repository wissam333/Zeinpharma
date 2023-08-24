<template>
    <div class="category col-lg-9 col-md-12">
        <ul class="shuffle">

            <RouterLink to="/ProductView/All" class="filter-btn" @click="active = 'All'"
                :class="active == 'All' ? 'active' : ''">
                All
            </RouterLink>

            <RouterLink to="/ProductView/Vitamins-Minerals" class="filter-btn" @click=" active = 'Vitamins-Minerals'"
                :class="active == 'Vitamins-Minerals' ? 'active' : ''">{{ $t("products.product4") }}
            </RouterLink>

            <RouterLink to="/ProductView/Lipid-lowering Drugs" class="filter-btn" @click=" active = 'Lipid-lowering Drugs'"
                :class="active == 'Lipid-lowering Drugs' ? 'active' : ''">
                {{ $t("products.product1") }}
            </RouterLink>

            <RouterLink to="/ProductView/Antihypertensive Drugs" class="filter-btn"
                @click=" active = 'Antihypertensive Drugs'" :class="active == 'Antihypertensive Drugs' ? 'active' : ''">
                {{ $t("products.product2") }}
            </RouterLink>

            <RouterLink to="/ProductView/Drugs That Affect The Blood" class="filter-btn"
                @click=" active = 'Drugs That Affect The Blood'"
                :class="active == 'Drugs That Affect The Blood' ? 'active' : ''">{{ $t("products.product3") }}
            </RouterLink>
        </ul>

        <div class="gallery" v-if="category.length !== 0">
            <RouterLink :to="{
                path: '/ItemView',
                name: 'ItemView',
                component: ItemView,
                params: { id: item.id }
            }"  class="item" v-for="item in category" :key="item.id">
                <p class="text-center"> {{ item.name }}</p>
                <img :src="item.image" alt="">
            </RouterLink>
        </div>
        <h2 v-else>
            No Results! Please Clear The Filter
        </h2>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import meds from '../../Fake Product Data/MOCK_DATA.json'
// store
import { productsFilter } from "../../stores/counter";
import { storeToRefs } from "pinia";

//store fetch
let filter = productsFilter();
let { Dosage_form, searchName } = storeToRefs(filter);

const route = useRoute()
let active = ref("All")

let category = computed(() => {
    let categoryPath = ref(route.params.category)
    return meds.filter(item => {
        if (item.category == categoryPath.value && (Dosage_form.value == item.Dosage_form || Dosage_form.value == "- All -") && (searchName.value == item.name || searchName.value == "")) {
            return item
        }
        else if (active.value == 'All' && (Dosage_form.value == item.Dosage_form || Dosage_form.value == "- All -") && (searchName.value == item.name || searchName.value == "")) {
            return item
        }
    });
})

</script>

<style lang="scss" scoped>
.shuffle {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-top: 50px;

    li,
    a {
        padding: 10px 20px;
        color: #231f1e;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid #c5c5c5;
        border-radius: 30px;
        margin-right: 10px;
        margin-bottom: 10px;
        text-decoration: none;
        cursor: pointer;

        &.active {
            background-color: #013d29;
            color: #fff;
            border: transparent;
        }
    }
}

.gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    padding-right: 22px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 10px;
    }

    @media (max-width: 991px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 479px) {
        grid-template-columns: 1fr 1fr;
    }

    .item {
        display: flex;
        flex-direction: column-reverse;
        text-decoration: none;
        color: #000;

        p {
            width: 150px;
            margin: 5px auto 5px auto;
            text-overflow: ellipsis;
            /* will make [...] at the end */
            white-space: nowrap;
            /* paragraph to one line */
            overflow: hidden;
            /* older browsers */
        }

        img {
            width: 200px;
            margin: auto;

            @media (max-width: 991px) {
                width: 150px;
            }
        }
    }
}
</style>