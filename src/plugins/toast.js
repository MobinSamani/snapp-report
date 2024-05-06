import { useToast } from "vue-toastification";

export default {
  install(app) {
    const toast = useToast();

    app.config.globalProperties.$toast = {
      default: (message, options) => toast(message, options),
      success: (message, options) => toast.success(message, options),
      info: (message, options) => toast.info(message, options),
      warning: (message, options) => toast.warning(message, options),
      error: (message, options) => toast.error(message, options)
    };
  }
};
