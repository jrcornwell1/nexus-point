import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { Vehicle } from '@/api/index.js';
import { FILTERS } from '@/const/index.js';

export default defineStore('vehicle', () => {
  const isLoading = ref(false);
  const vehicles = ref([]);
  const meta = ref({});
  const activeFilter = ref(FILTERS.ALL);

  const fetchVehicles = async (params = null, page = null) => {
    try {
      isLoading.value = true;
      const options = params ? { advert_classification: params, page: page } : {};
      const { data } = await Vehicle.getVehicles(options);
      vehicles.value = data.data;
      meta.value = data.meta;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  const total = {
    [FILTERS.ALL]: 'all_total',
    [FILTERS.USED]: 'total_used_vehicles',
    [FILTERS.NEW]: 'total_new_vehicles',
    [FILTERS.OFFERS]: 'offer_vehicles',
  };

  const totalCars = computed(() => {
    return meta.value[total[activeFilter.value]];
  });

  return {
    activeFilter,
    totalCars,
    isLoading,
    vehicles,
    meta,
    fetchVehicles,
  };
});
