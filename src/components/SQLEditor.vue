<template>
    <Codemirror :value="props.value" :options="state.cmOptions" placeholder="Add Query" :height="300" @change="change"
        ref="cmRef" />
</template>
  
<script setup>
import Codemirror from "codemirror-editor-vue3";
import "codemirror/addon/display/placeholder.js";
import 'codemirror/mode/sql/sql.js';
import "codemirror/theme/mdn-like.css";


import { ref, reactive } from "vue";

const cmRef = ref(null);

const state = reactive({
    cmOptions: {
        theme: "mdn-like",
        lineNumbers: true,
        matchBrackets: true,
        indentUnit: 4,
        mode: "text/x-sql"
    },
})

const props = defineProps({
    value: String
})

function change() {

}
function refresh() {
    (cmRef.value).refresh()
}

defineExpose({ refresh })
</script>
<style lang="scss">
.cm-s-mdn-like .cm-keyword {
    color: var(--el-color-primary);
}
</style>