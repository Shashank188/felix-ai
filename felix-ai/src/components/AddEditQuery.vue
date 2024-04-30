<script setup lang="ts">
import type { MockData } from '@/mocks';
import { reactive, ref } from 'vue';
import { ElNotification } from 'element-plus'

const state = reactive({
    drawer: false,
    data: {},
    prompt: ''
})

const sqlRef = ref(null)

const emit = defineEmits(['onSubmit'])

function openQueryDrawer(data: MockData) {
    if (!data.id) {
        data = {
            title: '',
            sql: '',
            desc: '',
            data: [],
            config: [],
            id: '',
            updatedBy: 'User',
            updatedOn: 'Date'
        }
    }
    state.drawer = true;
    state.data = data;
    setTimeout(() => {
        (sqlRef.value as any).refresh();
    }, 100);
}
function closeQueryDrawer() {
    state.drawer = false;
}

function onSubmit() {
    emit('onSubmit', state.data);
    showSuccess("Query Saved Successfully.")
}

async function onGenerateQuery() {
    if (state.prompt) {
        let generatedQuery = "";
        const sql = `SELECT 
        product_category, 
        SUM(sales_amount) AS total_sales
        FROM 
        sales_data
        WHERE 
        sales_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
        GROUP BY 
        product_category
        ORDER BY 
        total_sales DESC;
                `;
        for (let s of sql) {
            generatedQuery += s;
            (state.data as MockData).sql = generatedQuery;
            await new Promise(r => setTimeout(r, 20));
        }
    }
}

function showSuccess(message: string) {
    ElNotification({
        title: 'Success',
        message,
        type: 'success',
        position: 'bottom-right'
    })
}

defineExpose({
    openQueryDrawer,
    closeQueryDrawer
})
</script>
<template>
    <el-drawer v-model="state.drawer" size='600' direction="rtl">
        <template #header>
            <h5>{{ (state.data as MockData).title || 'Add New Query' }}</h5>
        </template>
        <template #default>
            <div class="d-flex align-items-center justify-content-between"> <el-input class="mx-2" v-model="state.prompt"
                    placeholder="Enter prompt for AI" />
                <el-button type="primary" class="my-3" @click="onGenerateQuery">Generate using AI</el-button>
            </div>

            <SQLEditor :value="(state.data as MockData).sql" ref="sqlRef"></SQLEditor>

            <el-form :model="state.data" label-width="auto" class="p-2" style="max-width: 600px">
                <el-form-item label="Title">
                    <el-input v-model="(state.data as MockData).title" />
                </el-form-item>
                <el-form-item label="ID">
                    <el-input v-model="(state.data as MockData).id" />
                </el-form-item>
                <el-form-item label="Description">
                    <el-input type="textarea" v-model="(state.data as MockData).desc" />
                </el-form-item>
            </el-form>
        </template>
        <template #footer>
            <el-button type="primary" class="my-3" @click="onSubmit">Submit</el-button>
        </template>
    </el-drawer>
</template>