import { defineConfig } from "vite";

export default defineConfig({
    // base: "/cyberdude-challenges/",
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