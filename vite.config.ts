// import react from "@vitejs/plugin-react";
import mongezVite from "@mongez/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("mongez")) {
            // remove the root path until the node_modules
            id = id.split("node_modules/")[1];
            // now take first two segments
            return id.split("/").slice(0, 2).join("-");
          }

          if (id.includes("@mantine")) {
            id = id.split("node_modules/")[1];
            // now take first two segments
            return id.split("/").slice(0, 2).join("-");
          }

          if (id.includes("node_modules")) {
            return (
              "vendor-" +
              id
                .split("node_modules/")[1]
                .split("/")[0]
                .replace("@", "")
                .toLowerCase()
            );
          }
        },
      },
    },
  },
  plugins: [
    mongezVite({
      compressBuild: false,
      htmlEnvPrefix: "__",
      htmlEnvSuffix: "__",
    }),
    react(),
  ],
  envPrefix: "APP_",
}));
