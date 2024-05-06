import auth from "./auth.js";
import history from "./history.js";

export default (ctx) => ({
  auth: auth(ctx),
  history: history(ctx)
});
