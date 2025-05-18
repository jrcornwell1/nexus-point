<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="grid-rows-() grid h-full grid-cols-1">
    <div class="@container col-span-2">
      <RouterView name="scope"></RouterView>
    </div>
    <RouterView name="content"></RouterView>
  </div>
</template>

<style scoped></style>
