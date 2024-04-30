<template>
    <div class="login">
        <el-row style="height: 100%;" justify="center">
            <el-col class="d-flex align-items-start" :span="6">
                <div class="form-container">
                    <el-form ref="loginForm" :v-model="state.loginForm" class="login-form"
                        @submit.native.prevent="handleLogin">
                        <el-form-item label="Username" prop="username">
                            <el-input v-model="state.loginForm.username" placeholder="Username"></el-input>
                        </el-form-item>
                        <el-form-item label="Password" prop="password">
                            <el-input type="password" v-model="state.loginForm.password" placeholder="Password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" native-type="submit">Login</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
   
<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter, type Router } from 'vue-router'

import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

const state = reactive({
    loginForm: { username: "admin12345", password: "admin12345Password" }
});

const router: Router = useRouter();

function handleLogin() {
    router.push({ name: 'home' })
}
</script>
   
<style scoped lang="scss">

</style>
   