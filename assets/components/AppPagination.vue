<script setup>
import { useOffsetPagination } from '@vueuse/core';
import { computed, toRefs, watch, ref } from 'vue';
import ArrowLeftDark from '../icons/arrow-left--dark.svg';
import ArrowRightDark from '../icons/arrow-right--dark.svg';

const props = defineProps({
  meta: { type: Object, required: true },
});

const emit = defineEmits(['pageChanged']);

const { meta } = toRefs(props);

const currentPageRef = ref(props.meta.current_page);

const pagination = useOffsetPagination({
  total: computed(() => props.meta.total ?? 0),
  pageSize: computed(() => props.meta.per_page ?? 10),
  page: currentPageRef,
});

const { pageCount, isFirstPage, isLastPage } = pagination;

const goToNext = () => {
  if (!isLastPage.value) {
    currentPageRef.value++;
    emit('pageChanged', currentPageRef.value);
  }
};

const goToPrev = () => {
  if (!isFirstPage.value) {
    currentPageRef.value--;
    emit('pageChanged', currentPageRef.value);
  }
};

const goToPage = (page) => {
  currentPageRef.value = page;
  emit('pageChanged', page);
};

watch(
  () => props.meta.current_page,
  (newPage) => {
    if (newPage !== currentPageRef.value) {
      currentPageRef.value = newPage;
    }
  },
);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div v-if="meta" class="flex flex-col justify-between gap-4 pt-11 md:flex-row">
    <button
      type="button"
      class="btn order-2 font-normal text-grey-950 btn-link btn-sm md:order-1"
      @click="scrollToTop"
    >
      Back to top
    </button>
    <div class="order-1 flex items-center gap-2 md:order-2">
      <button
        :disabled="isFirstPage"
        @click="goToPrev"
        type="button"
        class="btn-pagination btn disabled:opacity-5"
      >
        <ArrowLeftDark class="" />
      </button>

      <!-- Page Numbers -->
      <div class="flex gap-2">
        <template v-for="page in meta.last_page" :key="page">
          <button
            @click="goToPage(page)"
            class="rounded px-3 py-1"
            type="button"
            :class="{
              'bg-primary text-white': currentPageRef === page,
              'hover:bg-gray-100': currentPageRef !== page,
            }"
          >
            {{ page }}
          </button>
        </template>
      </div>

      <button
        :disabled="isLastPage"
        @click="goToNext"
        type="button"
        class="btn-pagination btn disabled:opacity-50"
      >
        <ArrowRightDark class="" />
      </button>
    </div>
    <div class="text-gray-600 hidden text-sm md:order-3 md:block">
      Page {{ currentPageRef }} of {{ pageCount }}
    </div>
  </div>
</template>
