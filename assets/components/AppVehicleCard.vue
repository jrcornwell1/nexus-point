<script setup>
import { computed, toRefs } from 'vue';
import StarIcon from '../icons/star.svg';
import { VEHICLE } from '@/const/index.js';
import AppImageGallery from '@/components/AppImageGallery.vue';

const props = defineProps({
  vehicle: { type: Object, default: () => {} },
});

const { vehicle } = toRefs(props);

const isPriceReduced = computed(() => {
  return vehicle.value.original_price !== vehicle.value.price ? vehicle.value.original_price : '';
});

const emit = defineEmits(['favourite']);

const favouritevehicle = () => {
  emit('favourite');
};

const isCalculateFinance = computed(() => {
  return vehicle.value.plate >= VEHICLE.CALCULATE_FINANCE_YEAR;
});
</script>

<template>
  <div
    class="card bg-base-100 shadow-xl md:transition-all md:duration-300 md:ease-in-out md:hover:scale-105 md:hover:shadow-2xl"
  >
    <figure class="relative">
      <AppImageGallery :media-urls="vehicle.media_urls">
        <div class="absolute top-0 left-0 z-99 m-2.5 badge badge-lg">
          {{ vehicle.advert_classification }}
        </div>
        <div class="absolute right-0 bottom-0 left-0 z-99 m-2.5 flex flex-row flex-wrap gap-1">
          <div
            class="badge rounded-lg badge-sm"
            v-for="(feature, index) in vehicle.key_features"
            :key="index"
          >
            {{ feature }}
          </div>
        </div>
      </AppImageGallery>
    </figure>

    <div class="card-body gap-2.5 rounded-lg bg-white p-2.5">
      <div class="flex flex-row justify-between">
        <div>
          <h2 class="text-lg font-normal">
            {{ vehicle.plate }} {{ vehicle.make }} {{ vehicle.model }}
          </h2>
          <h3 class="text-sm font-normal text-grey-600">{{ vehicle.derivative }}</h3>
        </div>

        <button type="button" class="btn btn-ghost" @click="favouritevehicle"><StarIcon /></button>
      </div>

      <div>
        <div class="text-lg font-bold">
          {{ vehicle.monthly_payment
          }}<span class="text-sm font-normal">/mo ({{ vehicle.monthly_finance_type }})</span>
        </div>
        <div class="vehicles-center flex flex-row items-center gap-[5px] text-sm">
          <div :class="[{ 'text-red': isPriceReduced }]">£{{ vehicle.price }}</div>
          <div v-if="isPriceReduced" class="line-through">£{{ isPriceReduced }}</div>
          <button
            type="button"
            class="btn h-0 p-0 text-sm font-normal text-brand btn-link no-underline"
          >
            Calculate {{ isCalculateFinance ? 'finance' : '' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
