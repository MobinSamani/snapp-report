export default ({ $taxiApi }) => ({
  async getAll(params) {
    return await $taxiApi.get("/api-base/v2/passenger/ride/history", { params });
  }
});
