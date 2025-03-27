import { defineStore } from "pinia";
import axios from 'axios'
const useProductStore = defineStore('productStore', {
  state() {
    return {
      products: []
    }
  },
  actions: {
    async loadData() {
      let result = await axios.get('http://localhost:9000/data')
      this.products = result.data
    }

  }
})
export default useProductStore