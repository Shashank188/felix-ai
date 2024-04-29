<script setup lang="ts">
import { reactive, ref } from 'vue'
import mocks, { type MockData } from "@/mocks";
import TableComponent from "@/components/TableComponent.vue";
import QueriesList from "@/components/QueriesList.vue";
import AddEditQuery from '@/components/AddEditQuery.vue';


const state = reactive({
  selectedQueryId: "customer",
  filteredMocks: mocks as any,
})

const addEditRef = ref(null)


function onLoadData(query: any) {
  state.selectedQueryId = query
}

function onInputSearch(q: string) {
  state.filteredMocks = Object.entries(mocks).reduce((acc: any, [id, data]: [string, any]) => {
    if (data?.title?.toLowerCase().includes(q.toLowerCase())) acc[id] = data;
    return acc
  }, {})
}

function onAddNewQuery() {
  (addEditRef?.value as any).openQueryDrawer({});

}

function onIconClick({ type, id }: { type: string, id: string }) {
  switch (type) {
    case "edit":
      const selectedQuery = state.filteredMocks?.[id];
      (addEditRef?.value as any).openQueryDrawer(selectedQuery);
  }
}

function onSubmit(data: MockData) {
  state.filteredMocks[data.id] = data;
  (addEditRef?.value as any).closeQueryDrawer();

}

</script>
<template>
  <el-row>
    <el-col :span="7">
      <QueriesList @on-load-data=onLoadData @on-input-search="onInputSearch" @on-add-new-query="onAddNewQuery"
        :data="(state.filteredMocks as any)" @on-icon-click="onIconClick">
      </QueriesList>
    </el-col>
    <el-col :span="17">
      <TableComponent :data="state.filteredMocks?.[state.selectedQueryId]?.data || []"
        :config="state.filteredMocks?.[state.selectedQueryId]?.config || []">
      </TableComponent>
    </el-col>
  </el-row>
  <AddEditQuery ref="addEditRef" @on-submit="onSubmit"></AddEditQuery>
</template>
