<script setup>
import { ROUTE } from '../const';
</script>

<template>
  <header
    class="col-span-1 col-start-1 row-start-1 flex h-20 items-center gap-4 bg-(--color-black) px-4 md:col-span-2 md:px-5 md:py-4"
  >
    <button
      type="button"
      class="btn aspect-square px-0 text-white btn-ghost hover:bg-primary/20 md:hidden"
      @click="toggle()"
    >
      <IconClose v-if="isOpen" />
      <IconMenu v-else />
    </button>
    <RouterLink
      :to="{ name: ROUTE.SEARCH_RESULTS }"
      class="items-center gap-2 text-base font-semibold text-white md:inline"
    >
      LOGO here
    </RouterLink>
    <div class="ms-auto flex items-center gap-3 font-normal text-white"></div>
  </header>
</template>
