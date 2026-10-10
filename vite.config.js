import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react({
      include: /\.[jt]sx?$/,
    }),
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/components"),
      api: path.resolve(__dirname, "src/api"),
      assets: path.resolve(__dirname, "src/assets"),
      layouts: path.resolve(__dirname, "src/layouts"),
      application: path.resolve(__dirname, "src/application"),
      baseUI: path.resolve(__dirname, "src/baseUI"),
      utils: path.resolve(__dirname, "src/utils"),
    },
    extensions: [".mjs", ".js", ".jsx", ".json", ".css"],
  },
  server: {
    host: "127.0.0.1",
    port: 8080,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        rewrite: (p) => p.replace(/^\/api/, ""),
      },
    },
  },
  // build: {
  //   outDir: "build",
  // },
});
