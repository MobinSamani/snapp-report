import createTaxiRepository from "@/services/api/taxi/index.js";
import createFoodRepository from "@/services/api/food/index.js";

export default {
  install(app) {
    const ctx = app.config.globalProperties;
    ctx.$taxiRepos = createTaxiRepository(ctx);
    ctx.$foodRepos = createFoodRepository(ctx);
  }
};
