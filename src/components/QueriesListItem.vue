<script setup lang="ts">
import {
    Clock,
    Edit,
    Histogram,
} from '@element-plus/icons-vue';
// @ts-ignore
import SQLEditor from '@/components/SQLEditor.vue';
import { watch, ref } from 'vue';

enum FeatureEvent {
    EDIT = "edit",
    VERSION = "version",
    ANALYTICS = "analytics",
}

const props = defineProps({
    item: {
        type: Object,
        default: () => { }
    },
    activeName: {
        type: String
    }
})
const sqlRef = ref(null)

const emit = defineEmits(['onLoadData', 'onIconClick'])

function onIconClick(type: string) {
    emit('onIconClick', { type, id: props.item.id });
}

watch(() => props.activeName, () => {
    setTimeout(() => {
        (sqlRef.value as any).refresh();
    }, 100);
})

</script>
<template>
    <div class="d-flex justify-content-around w-100 pb-4">
        <el-tooltip content="Edit Query"><el-button type="primary" :icon="Edit" circle
                @click="onIconClick(FeatureEvent.EDIT)" /></el-tooltip>
        <el-tooltip content="Version History"> <el-button type="primary" :icon="Clock" circle
                @click="onIconClick(FeatureEvent.VERSION)" /></el-tooltip>
        <el-tooltip content="Analytics"><el-button type="primary" :icon="Histogram" circle
                @click="onIconClick(FeatureEvent.ANALYTICS)" /></el-tooltip>
    </div>
    <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">SQL Query</div> <el-button type="primary" plain class="m-2"
            @click="emit('onLoadData', $event)">Load Data</el-button>
    </div>
    <SQLEditor :value="props.item.sql" ref="sqlRef"></SQLEditor>
    <el-divider />
    <div class="meta-data">
        <div class="meta-data__desc"> {{ props.item.desc }}</div>

        <div><strong>Updated:</strong> {{ props.item.updatedOn }} by {{ props.item.updatedBy }}</div>
        <div></div>
    </div>
</template>