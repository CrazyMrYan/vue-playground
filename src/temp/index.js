export const testSFCTemp = `<template>
  <div class="test">
    Hello, {{ message }}!
    <br />
    <Component />
  </div>
</template>

<script setup>
  import Component from './Component.vue'
  const message = 'Vue SFC'
</script>

<style>
.test {
  font-size: 20px;
  color: red;
}
</style>
`;

export const testComponentSFCTemp = `<template>
  <button>
    click me
  </button>
</template>
`;
