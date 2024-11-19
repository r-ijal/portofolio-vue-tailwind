import { defineStore } from "pinia";
import { ref, watch } from "vue";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useThemeStore = defineStore("theme", () => {
  // other options...
  const html = document.querySelector("html");
  const dark_toggle = ref(false);

  const checkTheme = () => {
    console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") !== null) {
      console.log(localStorage.getItem("theme"), '--if');

      dark_toggle.value =
        localStorage.getItem("theme") === "true" ? true : false;
    }
    console.log(dark_toggle.value, "--value");
  };
  const checkToggler = () => {
    dark_toggle.value = !dark_toggle.value;
    console.log(dark_toggle.value);
    localStorage.setItem("theme", dark_toggle.value);
    console.log(localStorage.getItem("theme"));
  };

  watch(dark_toggle, () => {
    console.log("watcher", dark_toggle.value);

    dark_toggle.value
      ? html.classList.add("dark")
      : html.classList.remove("dark");
  });

  return { dark_toggle, checkToggler, checkTheme };
});
