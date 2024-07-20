import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/")
    }
  },
  test: {
    environment: "jsdom",
    include: ["**/*.{test,spec}.{tsx,ts}"],
    exclude: ["**/e2e/**", "**/node_modules/**"]
  }
});
