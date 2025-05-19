<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
  required: { type: Boolean, default: false },
});

const { placeholder, type, required } = toRefs(props);
</script>

<template>
  <input :type="type" :placeholder="placeholder" class="input" :required="required" />
</template>

<style scoped></style>
