<script setup>
import AppFrameHeader from './AppFrameHeader.vue';
</script>

<template>
  <AppFrameHeader />

  <div class="px-[0.8125rem] py-0 md:px-[3.125rem] md:py-8 xl:px-[12.8125rem]">
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
