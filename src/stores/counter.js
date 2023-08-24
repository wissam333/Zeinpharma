import { ref } from 'vue'
import { defineStore } from 'pinia'
export const productsFilter = defineStore('counter', () => {
  let Dosage_form = ref('- All -')
  let searchName = ref('')
  //active page base color
  let activePage = ref('Home')
  return { Dosage_form, searchName, activePage }
})
