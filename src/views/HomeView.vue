<script setup lang="ts">
import { reactive, ref, onBeforeUnmount } from 'vue'
import mocks, { type MockData } from "@/mocks";
import TableComponent from "@/components/TableComponent.vue";
import QueriesList from "@/components/QueriesList.vue";
import AddEditQuery from '@/components/AddEditQuery.vue';
import VersionHistory from '@/components/VersionHistory.vue';
import Analytics from '@/components/Analytics.vue';
import WelcomeUser from "@/components/WelcomeUser.vue"

const state = reactive({
  selectedQueryId: "",
  filteredMocks: mocks as any,
})

const addEditRef = ref(null)
const versionHistoryRef = ref(null)
const analyticsRef = ref(null)



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
      break;
    case "version":
      (versionHistoryRef.value as any).openVersionDrawer();
      break;
    case 'analytics':
      (analyticsRef.value as any).openAnalyticsDrawer();

  }
}

function onSubmit(data: MockData) {
  state.filteredMocks[data.id] = data;
  (addEditRef?.value as any).closeQueryDrawer();

}

onBeforeUnmount(() => {
  state.selectedQueryId = ""
})

</script>
<template>
  <el-row>
    <el-col :span="7">
      <QueriesList @on-load-data=onLoadData @on-input-search="onInputSearch" @on-add-new-query="onAddNewQuery"
        :data="(state.filteredMocks as any)" @on-icon-click="onIconClick">
      </QueriesList>
    </el-col>
    <el-col :span="17">
      <TableComponent v-if="state.selectedQueryId" :data="state.filteredMocks?.[state.selectedQueryId]?.data || []"
        :config="state.filteredMocks?.[state.selectedQueryId]?.config || []">
      </TableComponent>
      <WelcomeUser v-else @on-tag-click="state.selectedQueryId = $event"></WelcomeUser>
    </el-col>
  </el-row>
  <AddEditQuery ref="addEditRef" @on-submit="onSubmit"></AddEditQuery>
  <VersionHistory ref="versionHistoryRef"></VersionHistory>
  <Analytics ref="analyticsRef"></Analytics>
</template>
