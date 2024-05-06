import { useAuthStore } from "@/stores/auth";

export default async function (app, to, from, next) {
  if (!to.meta.auth) return next();

  const ctx = app.config.globalProperties;
  const authStore = useAuthStore(ctx.$pinia);
  const user = authStore.getUser(to.meta.auth, ctx);

  if (user) {
    authStore.setUser(to.meta.auth, user, { ...ctx, $cookies: null });
  }

  next();
}
