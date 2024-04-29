<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
    analyticsDrawer: false,
    data: [{
        title: 'Total Queries',
        value: 12345,
        desc: '+10.2% from last month'
    }, {
        title: 'Successful Queries',
        value: 11355,
        desc: '+9,5% from last month'
    }, {
        title: 'Failed Queries',
        value: 12,
        desc: '-1.2% from last month'
    }, {
        title: 'Avg Query duration',
        value: 0.42,
        desc: '-4.2% from last month'
    }],
})

function openAnalyticsDrawer() {
    state.analyticsDrawer = true;
}

function closeAnalyticsDrawer() {
    state.analyticsDrawer = false;
}

defineExpose({
    openAnalyticsDrawer,
    closeAnalyticsDrawer
})

</script>
<template>
    <el-drawer v-model="state.analyticsDrawer" size='600' direction="rtl" title="Analytics">
        <el-card v-for="(item, index) in state.data" class="m-3" :key="index">
            <div>
                <span>{{ item.title }}</span>
                <h3>{{ item.value }}</h3>
                <span class="desc">{{ item.desc }}</span>

            </div>
        </el-card>
    </el-drawer>
</template>
<style lang="scss" scoped>
.desc {
    color: rgb(114, 118, 123)
}
</style>