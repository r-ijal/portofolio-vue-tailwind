<template>
  <header
    class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10" :class="{ 'navbar-fixed': scrollerStore.isScrolled }"
  >
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <a href="#home" class="font-bold text-lg text-primary block py-6"
            >rijalfadhila</a
          >
        </div>
        <div class="flex items-center px-4">
          <!-- <button id="hamburger" name="hamburger" type="button" class="block absolute right-4" @click="menuClick">
                    <span v-for="i in 3" :key="i" class="w-[30px] h-[2px] my-2 block bg-dark"></span>
                </button> -->
          <HamburgerMenu />

        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import HamburgerMenu from "./NavBar/HamburgerMenu.vue";
import { useScrollerStore } from "../../stores/scroller";

const scrollerStore = useScrollerStore()
const onScrolling = () => {
  if (window.scrollY > 0 && !scrollerStore.isScrolled) {
    scrollerStore.isScrolled = true
  } else if (scrollerStore.isScrolled && window.scrollY === 0) {
    scrollerStore.isScrolled = false
  }
};

onMounted(() => {
  window.addEventListener("scroll", onScrolling);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScrolling);
});
</script>
<style scoped></style>
