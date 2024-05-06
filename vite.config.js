import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    port: "8080",
    host: "localhost"
  },
  preview: {
    port: "8080",
    host: "localhost"
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  envPrefix: "ENV_"
});
