<script setup>
import { storeToRefs } from "pinia";
import useCartStore from "@/store/cartStore";
const cartStore = useCartStore();
const { cartList } = storeToRefs(cartStore);
</script>

<template>
  <div>
    <h1>购物车</h1> 
    <hr />
    <ul>
      <li v-for="cl in cartList" :key="cl.id">
        {{ cl.name }}-￥{{ cl.price }} x {{ cl.quantity }} = ￥{{
          cl.price * cl.quantity
        }}
      </li>
    </ul>
  </div>
  <div>总价￥{{ cartStore.totalPrice }}</div>
</template>

<style lang="css">
</style>

