<script setup>
const props = defineProps({ msg: String });

const emit = defineEmits(["response"]);
emit("response", "hello from child");
</script>

<template></template>

<style></style>
