export default ({ $taxiApi, $config }) => ({
  async sendOtp(model) {
    return await $taxiApi.post("/api-passenger-oauth/v2/otp", model);
  },
  async login(model) {
    model = { client_id: $config.clientId, client_secret: $config.clientSecret, grant_type: "sms_v2", ...model };
    return await $taxiApi.post("/api-passenger-oauth/v2/auth", model);
  }
});
