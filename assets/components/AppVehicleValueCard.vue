<script setup>
import FieldInput from '@/components/FieldInput.vue';
</script>

<template>
  <div
    class="p-sm:p-7 card flex flex-row justify-between border-[1px] border-grey-200 bg-base-100 p-3 sm:flex-col"
  >
    <div class="card-title flex flex-col items-start gap-2.5 text-left sm:text-center">
      <h2 class="text-lg font-semibold sm:text-2xl">Value your car</h2>
      <p class="hidden text-lg font-normal sm:block">
        Find out the value of your car in just a few minutes.
      </p>
      <p class="text-sm font-normal sm:hidden">Find out in just a few minutes.</p>
    </div>
    <form class="hidden sm:block">
      <div class="card-body gap-2.5">
        <FieldInput label="VRM" placeholder="Enter VRM" type="text" />
        <FieldInput label="Mileage" placeholder="Enter mileage" />
        <button type="button" class="btn rounded-xl text-lg font-semibold btn-primary">
          Value my car
        </button>
      </div>
    </form>
    <button type="button" class="btn h-full rounded-xl text-lg font-semibold btn-primary sm:hidden">
      Get valuation
    </button>
  </div>
</template>

<style scoped></style>
