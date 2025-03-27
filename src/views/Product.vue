<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import useProductStore from "@/store/productStore.js";
import useCartStore from "@/store/cartStore";
const productStore = useProductStore();
const { addToCart } = useCartStore();
const { products } = storeToRefs(productStore);
onMounted(() => {
  productStore.loadData();
});
</script>

<template>
  <div>
    <h1>产品列表</h1>
    <hr />
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}-￥{{ product.price }}
        <button @click="addToCart(product)" :disabled="product.inventory === 0">
          放入购物车
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="css">
</style>

