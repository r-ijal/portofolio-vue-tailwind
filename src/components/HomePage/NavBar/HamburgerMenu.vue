<template>
  <button
    id="hamburger"
    name="hamburger"
    type="button"
    class="block absolute right-4 lg:hidden"
    @click="menuClicked"
    :class="{ 'hamburger-active': hamburger_state }"
  >
    <!-- <span
      v-for="i in 3"
      :key="i"
      class="hamburger-line "
    ></span> -->
    <span class="hamburger-line transition duration-300 origin-top-left"></span>
    <span class="hamburger-line transition duration-300"></span>
    <span
      class="hamburger-line transition duration-300 origin-bottom-left"
    ></span>
  </button>

  <nav  id="nav-menu" class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-700 lg:dark:bg-transparent" :class="{ 'hidden': !hamburger_state }">
    <ul class="block lg:flex">
      <li class="group">
        <a href="#home" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Beranda</a>
      </li>
      <li class="group">
        <a href="#about" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Tentang Saya</a>
      </li>
      <li class="group">
        <a href="#portofolio" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Portofolio</a>
      </li>
      <li class="group">
        <a href="#clients" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Clients</a>
      </li>
      <li class="group">
        <a href="#blog" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Blog</a>
      </li>
      <li class="group">
        <a href="#contact" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Contact</a>
      </li>
      <li class="flex items-center pl-8 mt-3 lg:mt-0">
        <div class="flex">
          <span class="mr-2 text-sm text-slate-500">light</span>
          <input type="checkbox" class="hidden" id="dark-toggle" v-model="themeStore.dark_toggle" @click="themeStore.checkToggler">
          <label for="dark-toggle">
            <div class="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
              <div class="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
            </div>
          </label>
          <span class="ml-2 text-sm text-slate-500">dark</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const hamburger_state = ref(false);
const menuClicked = () => {
  hamburger_state.value = !hamburger_state.value;
};

// Darkmode toggle
import { useThemeStore } from "../../../stores/theme.js";
const themeStore = useThemeStore()
</script>
<style scoped></style>
