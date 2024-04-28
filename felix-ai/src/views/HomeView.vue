<script setup lang="ts">
import { reactive } from 'vue'
import mocks from "@/mocks";
import TableComponent from "@/components/TableComponent.vue";
import QueriesList from "@/components/QueriesList.vue";


const state = reactive({
  selectedQueryId: "customer",
  filteredMocks: mocks as any
})


function onLoadData(query: any) {
  state.selectedQueryId = query
}

function onInputSearch(q: string) {
  state.filteredMocks = Object.entries(mocks).reduce((acc: any, [id, data]: [string, any]) => {
    if (data?.title?.toLowerCase().includes(q.toLowerCase())) acc[id] = data;
    return acc
  }, {})
}

</script>
<template>
  <el-row>
    <el-col :span="6">
      <QueriesList @on-load-data=onLoadData @on-input-search="onInputSearch" :data="(state.filteredMocks as any)"></QueriesList>
    </el-col>
    <el-col :span="18">
      <TableComponent :data="state.filteredMocks?.[state.selectedQueryId]?.data || []"
        :config="state.filteredMocks?.[state.selectedQueryId]?.config || []">
      </TableComponent>
    </el-col>
  </el-row>
</template>
