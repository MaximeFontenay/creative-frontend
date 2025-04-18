import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      img: path.resolve(__dirname, "./src/assets/images"),
    },
  },
  plugins: [vue(), tailwindcss()],
});
