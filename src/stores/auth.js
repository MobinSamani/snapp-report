import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    taxiUser: null,
    foodUser: null
  }),
  actions: {
    getUser(authKey, ctx) {
      if (authKey === "taxi") return this.getTaxiUser(ctx);
      else if (authKey === "food") return this.getFoodUser(ctx);
    },
    getTaxiUser({ $cookies }) {
      return this.taxiUser || $cookies.get("auth_taxi_user");
    },
    getFoodUser({ $cookies }) {
      return this.foodUser || $cookies.get("auth_food_user");
    },
    setUser(authKey, user, ctx) {
      if (authKey === "taxi") this.setTaxiUser(user, ctx);
      else if (authKey === "food") this.setFoodUser(user, ctx);
    },
    setTaxiUser(user, { $cookies, $taxiApi }) {
      this.taxiUser = user;

      if (user) {
        if ($cookies) $cookies.set("auth_taxi_user", user);
        if ($taxiApi) $taxiApi.defaults.headers.common["Authorization"] = "Bearer " + user.token;
      } else {
        if ($cookies) $cookies.remove("auth_taxi_user");
        if ($taxiApi) delete $taxiApi.defaults.headers.common["Authorization"];
      }
    },
    setFoodUser(user, { $cookies, $foodApi }) {
      this.foodUser = user;

      if (user) {
        if ($cookies) $cookies.set("auth_food_user", user);
        if ($foodApi) $foodApi.defaults.headers.common["Authorization"] = "Bearer " + user.token;
      } else {
        if ($cookies) $cookies.remove("auth_food_user");
        if ($foodApi) delete $foodApi.defaults.headers.common["Authorization"];
      }
    }
  }
});
