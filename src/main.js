import { createApp } from "vue";
import App from "@/app.vue";
import Router from "@/router";
import Stores from "@/stores";

import Config from "@/plugins/config";
import Api from "@/plugins/api";
import Repository from "@/plugins/repository";
import VueCookies from "vue-cookies";
import Toastification from "vue-toastification";
import Toast from "@/plugins/toast";
import NavigationGuard from "@/services/navigation-guard.js";
import { createMetaManager } from "vue-meta";

import "vue-toastification/dist/index.css";
import "./assets/styles/main.css";

const metaManager = createMetaManager();

const app = createApp(App);

app.use(Router);
app.use(Stores);
app.use(Config);
app.use(Api);
app.use(Repository);
app.use(VueCookies);
app.use(metaManager);
app.use(Toastification, { position: "bottom-left" });
app.use(Toast);

app.mount("#app");

VueCookies.config("60d");

Router.beforeEach(async (to, from, next) => {
  await NavigationGuard(app, to, from, next);
});
