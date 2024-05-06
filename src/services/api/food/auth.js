export default ({ $foodApi }) => ({
  async sendOtp(model) {
    model = { optionalLoginToken: true, ...model };

    const formData = new FormData();

    for (const key in model) {
      formData.append(key, model[key]);
    }

    return await $foodApi.post("/v2/user/loginMobileWithNoPass", formData);
  },
  async login(model) {
    const formData = new FormData();

    for (const key in model) {
      formData.append(key, model[key]);
    }

    const params = {
      client: "WEBSITE",
      deviceType: "WEBSITE",
      appVersion: "8.1.1"
    };

    return await $foodApi.post("/v2/user/loginMobileWithToken", formData, { params });
  }
});
