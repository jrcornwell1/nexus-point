<script setup>
import useVehicleStore from '@/stores/vehicle.store.js';
import { storeToRefs } from 'pinia';
import { FILTERS } from '@/const/index.js';

const vehicleStore = useVehicleStore();
const { totalCars, activeFilter } = storeToRefs(vehicleStore);
const { fetchVehicles } = vehicleStore;

const handleFilter = (filter) => {
  activeFilter.value = filter;
  fetchVehicles(filter);
};
</script>

<template>
  <div class="flex flex-row items-center gap-3 pb-11">
    <div>Showing {{ totalCars }} cars</div>
    <button
      type="button"
      class="btn-filter btn btn-outline btn-sm"
      :class="{ 'btn-active': activeFilter === FILTERS.ALL }"
      @click="handleFilter('All')"
    >
      All
    </button>
    <button
      type="button"
      class="btn-filter btn btn-outline btn-sm"
      :class="{ 'btn-active': activeFilter === FILTERS.USED }"
      @click="handleFilter('Used')"
    >
      Used
    </button>
    <button
      type="button"
      class="btn-filter btn btn-outline btn-sm"
      :class="{ 'btn-active': activeFilter === FILTERS.NEW }"
      @click="handleFilter('New')"
    >
      New
    </button>
  </div>
</template>

<style scoped></style>
