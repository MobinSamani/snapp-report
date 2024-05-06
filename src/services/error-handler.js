import { useAuthStore } from "@/stores/auth";

export default (error, { $route, $pinia, $cookies }) => {
  const authStore = useAuthStore($pinia);
  const data = error.data.error;

  if (data) {
    switch (data.code) {
      case 401:
      case 3105:
        authStore.setUser($route.meta.auth, null, { $cookies });
        break;
    }

    return data.message;
  } else {
    return error.status + " " + error.statusText;
  }
};
