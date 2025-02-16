import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.{png,jpg,jpeg,JPG,PNG}"],
  server: {
    host: true,
    port: 8000,
  },
});
