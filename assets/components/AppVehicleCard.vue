<script setup>
import { computed, toRefs } from 'vue';
import StarIcon from '../icons/star.svg';

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
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <figure class="relative">
      <img :src="vehicle?.media_urls[0].medium" class="" alt="car" />
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
    </figure>

    <div class="card-body gap-2.5 rounded-lg bg-white">
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
        <div class="vehicles-center flex flex-row gap-[5px] text-sm">
          <div :class="[{ 'text-red': isPriceReduced }]">£{{ vehicle.price }}</div>
          <div v-if="isPriceReduced" class="line-through">£{{ isPriceReduced }}</div>
          <button type="button" class="btn h-0 p-0 text-sm font-normal text-brand btn-ghost btn-sm">
            Calculate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
