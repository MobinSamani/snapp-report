import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";
import "dotenv/config";

const app = express();

// eslint-disable-next-line no-undef
const variables = process.env;
const port = variables.ENV_PORT;

const apiEndpoints = {
  taxi: variables.ENV_TAXI_API_URL,
  food: variables.ENV_FOOD_API_URL
};

app.use(
  cors({
    origin: variables.ENV_APP_URL
  })
);

app.use("/:service", (req, res, next) => {
  const serviceKey = req.params.service;
  const apiUrl = apiEndpoints[serviceKey];

  if (!apiUrl) return res.status(404).send("Service not found");

  const proxy = createProxyMiddleware({
    target: apiUrl,
    changeOrigin: true,
    pathRewrite: {
      [`^/${serviceKey}`]: ""
    }
  });

  proxy(req, res, next);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
