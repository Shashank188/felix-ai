<script setup lang="ts">
import mocks from '@/mocks';

const emit = defineEmits(["onTagClick"])

</script>
<template>
    <div class="d-flex flex-column align-items-center h-100 border p-4">
        <h2 class="flex-grow-1 d-flex align-items-end heading">Unlock the Power of SQL</h2>
        <div class="flex-grow-1">
            <div>Our SQL web application provides a user-friendly interface to manage your databases with ease. Get started
                today and take control of your data. Choose Query from the most used list:</div>
            <el-tag v-for="(item, index) of mocks" class="m-2 tag" :key="index" size="large"
                @click="emit('onTagClick', item.id)">{{ item.title }}</el-tag>

        </div>

    </div>
</template>