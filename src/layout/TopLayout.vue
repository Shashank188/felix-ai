<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
</script>
<template>
    <div class="d-flex align-items-center justify-content-between topbar">
        <div class="heading">Felix.ai</div>
        <el-avatar  v-if="route.name !=='login'" :size="30" :src="circleUrl" />
    </div>
</template>
<style lang="scss">

.heading {
    color: #2026d2;
    font-size: 30px;
    font-weight: 600;
}

</style>