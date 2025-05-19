<script setup>
import { computed, ref, toRefs, watch } from 'vue';
import ArrowLeft from '../icons/arrow-left.svg';
import ArrowRight from '../icons/arrow-right.svg';

const props = defineProps({
  mediaUrls: { type: Array, required: true },
});

const { mediaUrls } = toRefs(props);

const currentIndex = ref(0);

const currentImage = computed(() => mediaUrls.value[currentIndex.value]);

const nextImage = () => {
  if (currentIndex.value < mediaUrls.value.length - 1) {
    currentIndex.value++;
  }
};

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const imageError = ref(false);

const handleImageError = () => {
  imageError.value = true;
};

watch(
  () => currentImage.value,
  () => {
    imageError.value = false;
  },
);

const responsiveImageSize = computed(() => {
  if (window.innerWidth >= 1024) {
    return currentImage.value.large;
  } else if (window.innerWidth >= 1024) {
    return currentImage.value.medium;
  }
  return currentImage.value.thumb;
});
</script>

<template>
  <div class="image-gallery w-full">
    <div class="image-container">
      <img
        :src="responsiveImageSize"
        :alt="`Image ${currentIndex + 1}`"
        class="h-[250px] w-full object-cover"
        @error="handleImageError"
        v-if="!imageError"
      />
      <div v-else class="flex h-full min-h-[250px] w-full items-center justify-center">
        <span class="">No image available</span>
      </div>

      <div
        class="absolute top-0 right-0 z-99 m-2.5 flex flex-row items-center justify-center gap-2.5"
      >
        <span class="text-gray-400 text-sm" :class="{ 'text-white': !imageError }">
          {{ currentIndex + 1 }} of {{ mediaUrls.length }}
        </span>

        <button
          @click="previousImage"
          :class="{ 'pointer-events-none': currentIndex === 0 }"
          class="btn-image-gallery btn"
        >
          <ArrowLeft class="" />
        </button>

        <button
          @click="nextImage"
          :disabled="currentIndex === mediaUrls.length - 1"
          :class="{
            'btn-image-gallery btn pointer-events-none': currentIndex === mediaUrls.length - 1,
          }"
          class="btn-image-gallery btn"
        >
          <ArrowRight />
        </button>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
