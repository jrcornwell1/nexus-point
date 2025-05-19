<script setup>
import useVehicleStore from '@/stores/vehicle.store.js';
import { FILTERS } from '@/const/index.js';
import useVehicles from '@/composables/useVehicles.js';

const vehicleStore = useVehicleStore();
const { fetchVehicles } = vehicleStore;

const { totalCars, activeFilter } = useVehicles();

const handleFilter = (filter) => {
  activeFilter.value = filter;
  fetchVehicles(filter);
};
</script>

<template>
  <div class="flex flex-col gap-5 pb-10 md:flex-row md:gap-5 md:pb-8">
    <div class="order-1 flex md:order-2 md:gap-5">
      <button
        type="button"
        class="btn-filter btn flex-1 btn-outline btn-sm"
        :class="{ 'btn-active': activeFilter === FILTERS.ALL }"
        @click="handleFilter('All')"
      >
        All
      </button>
      <button
        type="button"
        class="btn-filter btn flex-1 btn-outline btn-sm"
        :class="{ 'btn-active': activeFilter === FILTERS.USED }"
        @click="handleFilter('Used')"
      >
        Used
      </button>
      <button
        type="button"
        class="btn-filter btn flex-1 btn-outline btn-sm"
        :class="{ 'btn-active': activeFilter === FILTERS.NEW }"
        @click="handleFilter('New')"
      >
        New
      </button>
    </div>
    <div class="order-2 md:order-1">Showing {{ totalCars }} cars</div>
  </div>
</template>

<style scoped></style>
