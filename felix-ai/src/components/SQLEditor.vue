<template>
    <Codemirror :value="props.value" :options="state.cmOptions" placeholder="Add Query" :height="300" @change="change"
        ref="cmRef" />
</template>
  
<script setup lang="ts">
import Codemirror from "codemirror-editor-vue3";
import "codemirror/addon/display/placeholder.js";
import 'codemirror/mode/sql/sql.js';
import "codemirror/theme/blackboard.css";


import { ref, reactive, onMounted } from "vue";

const cmRef = ref(null);

const state = reactive({
    cmOptions: {
        theme: "blackboard",
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
    (cmRef.value as any).refresh()
}

defineExpose({ refresh })
</script>