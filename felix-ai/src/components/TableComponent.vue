<script lang="ts" setup>
import { type TableConfig } from '@/mocks';

const prop = defineProps({
    config: {
        type: Array<TableConfig>
    },
    data: {
        type: Array
    }
})
</script>
<template>
    <div class="table-container">
        <div class="d-flex flex-row-reverse">
            <el-button type="primary" class="my-3">Add New Query</el-button>
        </div>
        <div class="table">
            <el-table :data="data" style="width: 100%" height="675">
                <el-table-column v-for="(tab, index) of config" :key="index" :fixed="tab.fixed" :prop="tab.prop"
                    :label="tab.label" :width="tab.width" />
            </el-table>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.table-container {
    margin: 0rem 2rem 0rem 2rem;
}

.table {
    border: 1px solid #dee2e6;

}
</style>

  

  