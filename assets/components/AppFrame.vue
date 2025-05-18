<script setup>
import AppFrameHeader from './AppFrameHeader.vue';
</script>

<template>
  <div
    class="grid h-dvh w-dvw grid-cols-1 grid-rows-(--grid-template-row-frame) overflow-hidden md:grid-cols-(--grid-template-cols-frame)"
  >
    <AppFrameHeader />

    <div class="col-span-1 col-start-1 row-start-2 min-h-0 md:col-start-2">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped></style>
