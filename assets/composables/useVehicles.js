import { ref } from 'vue';

export default (vehicles, config = {}) => {
  const allVehicles = vehicles;
  const usedVehicles = ref([]);
  const newVehicles = ref([]);

  console.log(vehicles);

  return {
    allVehicles,
    usedVehicles,
    newVehicles,
  };
};
