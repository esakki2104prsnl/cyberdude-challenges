import { defineConfig } from "vite";

export default defineConfig({
  base: "/advise-slip-dom/",
  //   build: {
  //     rollupOptions: {
  //       input: {
  //         // main: resolve(__dirname, "index.html"),
  //       },
  //     },
  //   },
  build: {
    target: "ES2022", // <--------- ✅✅✅✅✅✅
  },
});