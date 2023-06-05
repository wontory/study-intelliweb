<script setup>
import { ref, computed, watch } from "vue";

const count = ref(0);
const computedCount = computed(() => count.value + 1);

const plus = () => count.value++;
const minus = () => count.value--;

watch(count, (newCount) => {
  console.log("변경된 값: " + newCount);
});
</script>

<template>
  <button @click="plus">+</button>
  <input type="number" v-model="count" />
  <button @click="minus">-</button>
  <h1>{{ count }}</h1>
  <h1>{{ computedCount }}</h1>
</template>

<style></style>
