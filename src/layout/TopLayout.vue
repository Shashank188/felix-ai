<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
</script>
<template>
    <div class="d-flex align-items-center justify-content-between topbar">
        <div><img src="/logo.svg"  class="heading" alt="logo"></div>
        <el-avatar  v-if="route.name !=='login'" :size="30" :src="circleUrl" />
    </div>
</template>