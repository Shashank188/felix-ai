  
<script lang="ts" setup>
import { reactive } from 'vue'
import QueriesListItem from "@/components/QueriesListItem.vue"
import { Plus } from '@element-plus/icons-vue';
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

const emit = defineEmits(['onLoadData', 'onInputSearch', 'onIconClick', 'onAddNewQuery'])

function onLoadData(e: any) {
    emit('onLoadData', e);
}

function onAddNewQuery() {
    emit('onAddNewQuery');
}
</script>
  
<template>
    <div>
        <div class="query-search d-flex align-items-center justify-content-between p-3">
            <el-input v-model="state.searchQuery" style="width: 320px" placeholder="Search SQL Queries..." clearable
                @change="emit('onInputSearch', state.searchQuery)" />

            <el-button type="primary" :icon="Plus" circle @click="onAddNewQuery()" />
        </div>
        <el-collapse class="query-list-container" v-model="state.activeName" accordion>
            <el-collapse-item v-for="(item, index) of props.data" :name="item.id" :key="index">
                <template #title>
                    <span class="title"> {{ item.title }}</span>
                </template>
                <QueriesListItem :activeName="state.activeName" :item="item" @on-load-data="onLoadData(index)"
                    @on-icon-click="emit('onIconClick', $event)"></QueriesListItem>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<style lang="scss">
.query-list-container {
    padding: 1rem 1rem 1rem 2rem;
    height: 85vh;
    overflow: scroll;
}
</style>
