import { computed, ref } from 'vue';
import { FILTERS } from '@/const/index.js';
import useVehicleStore from '../stores/vehicle.store.js';
import { storeToRefs } from 'pinia';

export default (config = {}) => {
  const vehicleStore = useVehicleStore();
  const { fetchVehicles } = vehicleStore;
  const { vehicles, meta } = storeToRefs(vehicleStore);
  const isLoading = ref(false);
  const activeFilter = ref(FILTERS.ALL);

  const total = {
    [FILTERS.ALL]: 'all_total',
    [FILTERS.USED]: 'total_used_vehicles',
    [FILTERS.NEW]: 'total_new_vehicles',
    [FILTERS.OFFERS]: 'offer_vehicles',
  };

  const totalCars = computed(() => {
    return meta[total[activeFilter.value]];
  });

  const loadVehicles = async (params = null, page = 1) => {
    isLoading.value = true;
    await fetchVehicles(params, page);
    isLoading.value = false;
  };

  return {
    activeFilter,
    totalCars,
    isLoading,
    vehicles,
    meta,
    loadVehicles,
  };
};
