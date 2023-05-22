<script setup>
import { ref, reactive } from "vue";

const message = ref("Hello World!");
const state = reactive({ count: 0 });

const titleClass = ref("title");
titleClass.value = "title2";

const link = ref("http://www.google.com");
link.value = "http://www.naver.com";

const count = ref(0);
function f() {
  count.value++;
}

const text = ref("abcd");

const a = ref([1, 2, 3, 4, 5]);
</script>

<template>
  <h1 v-bind:class="titleClass">{{ message }}</h1>
  <p>reactive: {{ state.count }}</p>
  <h1>{{ message.split("").reverse().join("") }}</h1>
  <h1><a :href="link">구글 링크</a></h1>
  <h1>{{ count }}</h1>
  <button v-on:click="f">버튼</button>
  <input v-model="text" />
  <h1>{{ text }}</h1>
  <h1 v-if="count">Hello</h1>
  <h1 v-else>False</h1>
  <ul>
    <li v-for="i in a" :key="index">{{ i }}</li>
  </ul>
</template>

<style>
.title {
  color: red;
}
.title2 {
  color: blue;
}
</style>
