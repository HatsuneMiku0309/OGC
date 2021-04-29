import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import process from "process";

console.log(process.env.MY_ENV);
createApp(App).use(store).use(router).mount("#app");
