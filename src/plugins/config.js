export default {
  install(app) {
    const variables = import.meta.env;
    app.config.globalProperties.$config = {
      appName: variables.ENV_APP_NAME,
      apiUrl: variables.ENV_API_URL,
      appUrl: variables.ENV_APP_URL,
      clientId: variables.ENV_CLIENT_ID,
      clientSecret: variables.ENV_CLIENT_SECRET
    };
  }
};
