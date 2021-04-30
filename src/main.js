import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/tailwind.scss";
import "./main.scss";

console.log(import.meta.env.VITE_TEST);
createApp(App).use(store).use(router).mount("#app");
