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

  <nav  id="nav-menu" class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none" :class="{ 'hidden': !hamburger_state }">
    <ul class="block lg:flex">
      <li class="group">
        <a href="#home" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Beranda</a>
      </li>
      <li class="group">
        <a href="#about" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Tentang Saya</a>
      </li>
      <li class="group">
        <a href="#portofolio" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Portofolio</a>
      </li>
      <li class="group">
        <a href="#clients" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Clients</a>
      </li>
      <li class="group">
        <a href="#blog" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Blog</a>
      </li>
      <li class="group">
        <a href="#contact" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact</a>
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
</script>
<style scoped></style>
