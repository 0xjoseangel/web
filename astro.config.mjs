// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://0xjoseangel.github.io/web/",
  base: '/web',
  vite: {
    plugins: [tailwindcss()],
  },
});
