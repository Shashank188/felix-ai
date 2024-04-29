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

function onExportData() {
    const csvContent = (prop.data as Array<any>)
        .map(obj => Object.values(obj).map(value => `"${value}"`).join(','))
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

</script>
<template>
    <div class="table-container">
        <div class="d-flex flex-row-reverse">
            <el-button v-if="data" type="primary" class="my-3" @click="onExportData">Export Data</el-button>
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
    margin: 0rem 2rem 0rem 1rem;
}

.table {
    border: 1px solid #dee2e6;

}
</style>

  

  