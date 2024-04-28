<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" class="login-form" @submit.native.prevent="handleLogin">
            <el-form-item label="Username" prop="username">
                <el-input v-model="loginForm.username" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="Password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
   
<script setup lang="ts">
import { ref, } from 'vue';
import { useRouter, type Router } from 'vue-router'

import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

const loginForm = ref({
    username: '',
    password: '',
});

const router: Router = useRouter();

function handleLogin() {
    router.push({ name: 'home' })
}
</script>
   
<style scoped>
.login-container {
    width: 300px;
    margin: 0 auto;
    padding-top: 100px;
}

.login-form {
    width: 100%;
}
</style>
   