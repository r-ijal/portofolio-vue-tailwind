import { defineStore } from "pinia";
import { ref } from "vue";

export const useScrollerStore = defineStore("scroller", () => {
    const isScrolled = ref(false)
  return { isScrolled };
});
