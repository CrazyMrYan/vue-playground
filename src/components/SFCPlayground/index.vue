<template>
  <Repl 
    :store="store" 
    :editor="codemirror"
    :editor-options="{
      showErrorText: '显示错误',
      autoSaveText: '自动保存',
    }"
  />
</template>

<script setup>
import { onMounted } from 'vue';
import { Repl, useStore } from '@vue/repl';
import codemirror from '@vue/repl/codemirror-editor';
import { testSFCTemp, testComponentSFCTemp } from '@/temp';

const store = useStore();

onMounted(() => {
  store.setFiles({
    'App.vue': testSFCTemp,
    'Component.vue': testComponentSFCTemp
  })
})

</script>

<style>
.output-container, .editor-container {
  height: calc(100vh - var(--header-height)) !important;
}
</style>
