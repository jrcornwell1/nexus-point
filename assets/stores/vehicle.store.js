import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Vehicle } from '@/api/index.js';

export default defineStore('vehicle', () => {
  const isLoading = ref(false);
  const vehicles = ref([]);
  const meta = ref({});

  const fetchVehicles = async (params = null, page = 1) => {
    try {
      isLoading.value = true;
      const options = params || page ? { page: page, advert_classification: params } : {};
      const { data } = await Vehicle.getVehicles(options);
      vehicles.value = data.data;
      meta.value = data.meta;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    vehicles,
    meta,
    fetchVehicles,
  };
});
