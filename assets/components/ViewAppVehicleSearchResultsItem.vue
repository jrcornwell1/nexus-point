<script setup>
import { toRefs } from 'vue';
import AppVehicleCard from '@/components/AppVehicleCard.vue';

const props = defineProps({
  item: { type: Object, required: true },
});

const { item } = toRefs(props);
</script>

<template>
  <AppVehicleCard :vehicle="item" />
</template>

<style scoped></style>
