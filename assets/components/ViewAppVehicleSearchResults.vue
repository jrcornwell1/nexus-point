<script setup>
import useVehicleStore from '../stores/vehicle.store.js';
import { storeToRefs } from 'pinia';
import ViewAppVehicleSearchResultsItem from './ViewAppVehicleSearchResultsItem.vue';
import ContainerGrid from './ContainerGrid.vue';
import { onBeforeUnmount } from 'vue';
import AppVehicleValueCard from './AppVehicleValueCard.vue';
import AppVehicleFilters from './AppVehicleFilters.vue';
import AppPageLoader from '@/components/AppPageLoader.vue';

const vehicleStore = useVehicleStore();
const { vehicles, isLoading } = storeToRefs(vehicleStore);
const { fetchVehicles } = vehicleStore;

fetchVehicles();

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
</template>

<style scoped></style>
