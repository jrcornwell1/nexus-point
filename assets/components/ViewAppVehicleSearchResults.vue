<script setup>
import useVehicleStore from '../stores/vehicle.store.js';
import { storeToRefs } from 'pinia';
import ViewAppVehicleSearchResultsItem from './ViewAppVehicleSearchResultsItem.vue';
import ContainerGrid from './ContainerGrid.vue';
import { onBeforeUnmount, ref } from 'vue';
import AppVehicleValueCard from './AppVehicleValueCard.vue';
import AppVehicleFilters from './AppVehicleFilters.vue';
import AppPageLoader from '@/components/AppPageLoader.vue';
import AppPagination from '@/components/AppPagination.vue';
import axios from 'axios';

const vehicleStore = useVehicleStore();
const { vehicles, isLoading, meta, activeFilter } = storeToRefs(vehicleStore);
const { fetchVehicles } = vehicleStore;

fetchVehicles();

const handlePageChange = async (page) => {
  await fetchVehicles(activeFilter.value, page);
};

onBeforeUnmount(() => {
  vehicleStore.$dispose();
});
</script>

<template>
  <AppVehicleFilters></AppVehicleFilters>

  <AppPageLoader v-if="isLoading"> </AppPageLoader>

  <template v-else>
    <ContainerGrid>
      <template v-for="(vehicle, index) in vehicles" :key="vehicle.id">
        <template v-if="index === 4">
          <AppVehicleValueCard />
        </template>
        <ViewAppVehicleSearchResultsItem :item="vehicle" />
      </template>
    </ContainerGrid>
  </template>
  <AppPagination :meta="meta" @pageChanged="handlePageChange" />
</template>

<style scoped></style>
