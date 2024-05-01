<script setup lang="ts">
import TopLayout from "@/layout/TopLayout.vue";
import { RouterView } from 'vue-router'


</script>

<template>
    <el-container class="main">
        <el-header class="topbar border-bottom">
            <TopLayout></TopLayout>
        </el-header>
        <el-main>
            <div class="content-container">
                <RouterView />
            </div>
        </el-main>
    </el-container>
</template>