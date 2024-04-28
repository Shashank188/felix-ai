<script setup lang="ts">
import { type MockData } from "@/mocks"
const emit = defineEmits(['onLoadData'])

const props = defineProps({
    item: {
        type: Object,
        default: () => { }
    },


})
</script>
<template>
    <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">SQL Query</div> <el-button type="primary" plain class="m-2"
            @click="emit('onLoadData', $event)">Load Data</el-button>
    </div>
    <div class="code-style">
        {{ props.item.sql }}
    </div>
    <el-divider />
    <div class="meta-data">
        <div class="meta-data__desc"> {{ props.item.desc }}</div>
        <div>Created: {{ props.item.createdOn }} by {{ props.item.createdby }}</div>
        <div></div>
    </div>
</template>


<style lang="scss" scoped>
.code-style {
    font-family: 'Courier New', Courier, monospace;
    background-color: #f5f5f5;
    color: #333;
    border: 0.1rem solid #ddd;
    white-space: pre-wrap;
    overflow-x: auto;
    max-height: 12rem;
    padding: 20px;
}

.meta-data {
    border: 0.1rem solid #ddd;
    border-radius: 0.5rem;
    padding: 1rem;
    &__desc {
        font-size: 16px;
    }
}
</style>