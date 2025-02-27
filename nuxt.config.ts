import { defineNuxtConfig } from "nuxt/config";
import { VitePWA } from "vite-plugin-pwa"; // Optional: Enables PWA support in Nuxt 3

export default defineNuxtConfig({
  // Disable Server-Side Rendering if not needed
  ssr: false,

  app: {
    baseURL: "/Portfolio/",
    head: {
      title: "Portifolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "manifest", href: "/manifest.json" } // PWA manifest link
      ]
    }
  },

  css: [
    "element-ui/lib/theme-chalk/index.css",
    "@/assets/css/tailwind.css",
    "@/assets/css/global.css"
  ],

  plugins: ["@/plugins/element-ui"],

  modules: [
    "@nuxt/content", // ✅ Corrected Nuxt 3 Content module usage
  ],

  build: {
    transpile: ["element-ui", "@vueuse/core"]
  },

  typescript: {
    strict: true // Ensures TypeScript strict mode is enabled
  },

  // ✅ Vite Plugin for PWA Support (Optional)
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest: {
          name: "Portfolio",
          short_name: "Portfolio",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          start_url: "/",
          icons: [
            {
              src: "/favicon.ico",
              sizes: "64x64 32x32 24x24 16x16",
              type: "image/x-icon"
            }
          ]
        }
      })
    ]
  },

  compatibilityDate: "2025-01-30"
});