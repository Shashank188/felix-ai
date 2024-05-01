<script setup lang="ts">
import { reactive } from 'vue';
import { Clock } from '@element-plus/icons-vue';
const state = reactive({
    versionDrawer: false,
    data: [{
        title: 'Version 6',
        updated: '23 April 2023'
    }, {
        title: 'Version 5',
        updated: '13 March 2023'
    }, {
        title: 'Version 4',
        updated: '4 Feb 2023'
    }, {
        title: 'Version 3',
        updated: '20 January 2023'
    }, {
        title: 'Version 2',
        updated: '3 August 2022'
    }, {
        title: 'Version 1',
        updated: '1 January 2022'
    }],
})

function openVersionDrawer() {
    state.versionDrawer = true;
}

function closeVersionDrawer() {
    state.versionDrawer = false;
}

defineExpose({
    openVersionDrawer,
    closeVersionDrawer
})

</script>
<template>
    <el-drawer v-model="state.versionDrawer" size='600' direction="rtl" title="Version History">
        <div class="d-flex align-items-center justify-content-between m-3 border version"
            v-for="(item, index) of state.data" :key="index">
            <div class="d-flex align-items-center">
                <el-icon class="m-3">
                    <Clock />
                </el-icon>
                <div>
                    <div>{{ item.title }}</div>
                    <div class="updated">{{ item.updated }}</div>
                </div>
            </div>
            <el-button type="primary" plain class="m-2">Revert</el-button>
        </div>
    </el-drawer>
</template>