<template>
    <div class="filter col-lg-3 col-md-12">
        <div class="fixed-container">
            <div class="filter-title">
                <i class="bi bi-filter-square-fill"></i>
                <h4>Filter</h4>
            </div>

            <div class="filter-fields">
                <label for="">Name</label>
                <select class="form-select" aria-label="Default select example" disabled>
                    <option selected>
                        <RouterLink to="/ProductView/All">not available</RouterLink>
                    </option>
                    <option value="ProductView/Vitamins-Minerals">
                        Vitamins-Minerals
                    </option>
                    <option>
                        <RouterLink to="/ProductView/Lipid-lowering Drugs">Lipid-lowering Drugs</RouterLink>
                    </option>
                    <option>
                        <RouterLink to="/ProductView/Antihypertensive Drugs">Antihypertensive Drugs</RouterLink>
                    </option>
                    <option>
                        <RouterLink to="/ProductView/Drugs That Affect The Blood">Drugs That Affect The Blood</RouterLink>
                    </option>
                </select>

                <label for="">Dosage form</label>
                <select class="form-select" aria-label="Default select example" v-model="Dosage_form">
                    <option value="- All -">- All -</option>
                    <option value="tablets">tablets</option>
                    <option value="chewable tablets">chewable tablets</option>
                    <option value="capsule">capsule</option>
                    <option value="dry syrup">dry syrup</option>
                </select>

                <label for="">Name</label>
                <div class="search_field">
                    <input v-model="searchTerm" class="form-control Commercial-name mr-sm-2" type="search"
                        placeholder="Search" aria-label="Search" autocomplete="off" @click="close = true">
                    <i class="bi bi-search"></i>

                    <ul class="autoSearch" v-if="searchMeds.length && close">
                        <li class="results-count">
                            Showing {{ searchMeds.length }} of {{ meds.length }} results
                        </li>
                        <hr>
                        <li v-for="med in searchMeds" :key="med.id"
                            @click="searchName = med.name; searchTerm = med.name; close = false">
                            {{ med.name }}
                        </li>
                    </ul>

                </div>

                <label for="">Contraindications</label>
                <div class="search_field">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" value="not available" disabled
                        aria-label="Search">
                    <i class="bi bi-search"></i>
                </div>

            </div>
            <div class="filter-buttons">
                <button type="button" class="btn btn-success" @click="clear()">Clear Filter</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import meds from '../../Fake Product Data/MOCK_DATA.json'
// store
import { productsFilter } from "../../stores/counter";
import { storeToRefs } from "pinia";
//store fetch
let filter = productsFilter();
let { Dosage_form, searchName } = storeToRefs(filter);
//for colsing autocomplete ul 
let close = ref(true)
let searchTerm = ref('')
const searchMeds = computed(() => {
    if (searchTerm.value === '') {
        return []
    }

    let matches = 0

    return meds.filter(med => {
        if (
            med.name.toLowerCase().includes(searchTerm.value.toLowerCase())
            && matches < 10
        ) {
            matches++
            return med
        }
    })
});
let clear = () => {
    searchTerm.value = ""
    Dosage_form.value = "- All -"
    searchName.value = ""
}
</script>

<style lang="scss" scoped>
@import "../../styles/style.scss";

.filter {
    position: relative;
    padding: 0;

    .fixed-container {
        position: fixed;
        background-color: #eee;
        width: inherit;
        height: calc(100vh - 80px);
        padding: 10px;

        @media (max-width: 991px) {
            position: relative;
            height: auto;
        }
    }

    .filter-title {
        display: flex;
        align-items: flex-end;
        padding: 50px 20px;
        background-color: #eee;

        h4 {
            font-weight: 600;
            display: inline-block;
            margin-left: 10px;
            margin-bottom: 0;
        }

        i {
            font-size: 20px;
            color: $baseColor;
        }
    }

    .filter-fields {
        padding: 0 20px;

        label {
            margin-bottom: 5px;
        }

        select,
        input {
            display: block;
            width: 100%;
            height: 35px;
            margin-bottom: 20px;
        }

        .search_field {
            position: relative;

            .form-control {
                padding: 0px 10px 0px 30px;
            }

            i {
                position: absolute;
                padding: 6px;
                min-width: 40px;
                top: 0;
                left: 0;
            }

            .autoSearch {
                position: absolute;
                background-color: #cdd2ef;
                max-height: 200px;
                overflow-y: scroll;
                padding: 10px;
                z-index: 2;

                .results-count {
                    font-weight: bold;
                }

                hr {
                    margin: 10px 0;
                }

                li {
                    padding: 5px 10px;
                    margin-bottom: 5px;

                    &:not(:nth-child(1)):hover {
                        background-color: #e0e2f3;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .filter-buttons {
        display: flex;
        justify-content: flex-end;
        padding: 20px;

        button {
            margin-left: 10px;
        }
    }
}
</style>