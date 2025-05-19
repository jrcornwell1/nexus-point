import { computed, ref } from 'vue';
import { FILTERS } from '@/const/index.js';
import useVehicleStore from '../stores/vehicle.store.js';
import { storeToRefs } from 'pinia';

export default () => {
  const vehicleStore = useVehicleStore();
  const { vehicles, meta } = storeToRefs(vehicleStore);
  const activeFilter = ref(FILTERS.ALL);

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
    vehicles,
    meta,
  };
};
