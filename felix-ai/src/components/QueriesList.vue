  
<script lang="ts" setup>
import { reactive } from 'vue'
import QueriesListItem from "@/components/QueriesListItem.vue"
import { type MockData } from "@/mocks"

const props = defineProps({
    data: {
        type: Array<any>,
        default: () => []
    }
})
const state = reactive({
    activeName: "",
    searchQuery: ""
})

const emit = defineEmits(['onLoadData', 'onInputSearch'])

function onLoadData(e: any) {
    emit('onLoadData', e);
}
</script>
  
<template>
    <div class="query-list-container">
        <div class="query-search">
            <el-input v-model="state.searchQuery" placeholder="Seach SQL Queries..." clearable
                @change="emit('onInputSearch', state.searchQuery)" />
        </div>
        <el-collapse v-model="state.activeName" accordion>
            <el-collapse-item v-for="(item, index) of props.data" :name="item.id" :key="index">
                <template #title>
                    <span class="title"> {{ item.title }}</span>
                </template>
                <QueriesListItem :item="item" @on-load-data="onLoadData(index)"></QueriesListItem>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<style lang="scss">
.query-list-container {
    margin: 1rem 1rem 1rem 2rem;
}
</style>
