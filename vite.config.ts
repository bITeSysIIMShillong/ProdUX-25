import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import staticPlugin from "vite-plugin-static";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Expose to all network interfaces
    port: 5173,
  },
  plugins: [
    react(),
    sitemap({
      hostname: "https://produx.bitesys.org",
      dynamicRoutes: ["/about", "/events", "/register"],
      exclude: ["/admin", "/404"],
      changefreq: "daily",
      priority: 1.0,
    }),
    staticPlugin({
      pages: ["/", "/about", "/events", "/register"],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "mixed-decls",
          "color-functions",
          "global-builtin",
          "import",
          "function-units",
          "slash-div",
        ],
      },
    },
  },
});
