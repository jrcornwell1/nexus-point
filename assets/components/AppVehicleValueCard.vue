<script setup>
import FieldInput from '@/components/FieldInput.vue';
</script>

<template>
  <div class="card justify-between border-[1px] border-grey-200 bg-base-100 p-7">
    <div class="card-title flex flex-col gap-2.5 text-center">
      <h2 class="text-2xl font-semibold">Value your car</h2>
      <p class="text-lg font-normal">Find out the value of your car in just a few minutes.</p>
    </div>
    <form>
      <div class="card-body gap-2.5">
        <FieldInput label="VRM" placeholder="Enter VRM" type="text" />
        <FieldInput label="Mileage" placeholder="Enter mileage" />
        <button type="button" class="btn rounded-xl text-lg font-semibold btn-primary">
          Value my car
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
