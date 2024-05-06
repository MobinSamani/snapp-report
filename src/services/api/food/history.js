export default ({ $foodApi }) => ({
  async getAll(params) {
    return await $foodApi.get("/v1/order/reorder", { params });
  }
});
