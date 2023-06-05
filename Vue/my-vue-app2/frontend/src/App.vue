<script setup>
import { onMounted, ref } from "vue";

const data = ref("");

const getData = async () => {
  const response = await (await fetch("/api")).json();
  data.value = response.msg;
};

const postData = () => {};

onMounted(() => {
  getData();
});
</script>

<template>
  <h1>Hello</h1>
  <button @click="getData()">GET요청</button>
  <button @click="postData()">POST요청</button>
  <h1>{{ data }}</h1>
</template>

<style scoped></style>
