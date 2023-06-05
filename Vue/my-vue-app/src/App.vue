<script setup>
import { ref, onMounted } from "vue";
import Counter from "./Counter.vue";
import ChildComp from "./ChildComp.vue";

const pref = ref("");
onMounted(() => (pref.value.innerHTML = "변경된 값"));

const childMsg = ref("");
</script>

<template>
  <ChildComp @response="(msg) => (childMsg = msg)" />
  <h1>{{ childMsg }}</h1>
  <Counter />
  <p ref="pref">DOM 객체</p>
</template>

<style></style>
