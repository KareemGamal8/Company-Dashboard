// vite.config.ts
import mongezVite from "file:///D:/works/mentoor-projects/online-store-dashboard-react/node_modules/@mongez/vite/esm/index.js";
import react from "file:///D:/works/mentoor-projects/online-store-dashboard-react/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///D:/works/mentoor-projects/online-store-dashboard-react/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig(() => ({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("mongez")) {
            id = id.split("node_modules/")[1];
            return id.split("/").slice(0, 2).join("-");
          }
          if (id.includes("@mantine")) {
            id = id.split("node_modules/")[1];
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
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3Jrc1xcXFxtZW50b29yLXByb2plY3RzXFxcXG9ubGluZS1zdG9yZS1kYXNoYm9hcmQtcmVhY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdvcmtzXFxcXG1lbnRvb3ItcHJvamVjdHNcXFxcb25saW5lLXN0b3JlLWRhc2hib2FyZC1yZWFjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29ya3MvbWVudG9vci1wcm9qZWN0cy9vbmxpbmUtc3RvcmUtZGFzaGJvYXJkLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Ly8gaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgbW9uZ2V6Vml0ZSBmcm9tIFwiQG1vbmdlei92aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4gKHtcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhcIm1vbmdlelwiKSkge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIHJvb3QgcGF0aCB1bnRpbCB0aGUgbm9kZV9tb2R1bGVzXHJcbiAgICAgICAgICAgIGlkID0gaWQuc3BsaXQoXCJub2RlX21vZHVsZXMvXCIpWzFdO1xyXG4gICAgICAgICAgICAvLyBub3cgdGFrZSBmaXJzdCB0d28gc2VnbWVudHNcclxuICAgICAgICAgICAgcmV0dXJuIGlkLnNwbGl0KFwiL1wiKS5zbGljZSgwLCAyKS5qb2luKFwiLVwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJAbWFudGluZVwiKSkge1xyXG4gICAgICAgICAgICBpZCA9IGlkLnNwbGl0KFwibm9kZV9tb2R1bGVzL1wiKVsxXTtcclxuICAgICAgICAgICAgLy8gbm93IHRha2UgZmlyc3QgdHdvIHNlZ21lbnRzXHJcbiAgICAgICAgICAgIHJldHVybiBpZC5zcGxpdChcIi9cIikuc2xpY2UoMCwgMikuam9pbihcIi1cIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgXCJ2ZW5kb3ItXCIgK1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJub2RlX21vZHVsZXMvXCIpWzFdXHJcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpWzBdXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZShcIkBcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBtb25nZXpWaXRlKHtcclxuICAgICAgY29tcHJlc3NCdWlsZDogZmFsc2UsXHJcbiAgICAgIGh0bWxFbnZQcmVmaXg6IFwiX19cIixcclxuICAgICAgaHRtbEVudlN1ZmZpeDogXCJfX1wiLFxyXG4gICAgfSksXHJcbiAgICByZWFjdCgpLFxyXG4gIF0sXHJcbiAgZW52UHJlZml4OiBcIkFQUF9cIixcclxufSkpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBRzdCLElBQU8sc0JBQVEsYUFBYSxPQUFPO0FBQUEsRUFDakMsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxHQUFHLFNBQVMsUUFBUSxHQUFHO0FBRXpCLGlCQUFLLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQztBQUVoQyxtQkFBTyxHQUFHLE1BQU0sR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHO0FBQUEsVUFDM0M7QUFFQSxjQUFJLEdBQUcsU0FBUyxVQUFVLEdBQUc7QUFDM0IsaUJBQUssR0FBRyxNQUFNLGVBQWUsRUFBRSxDQUFDO0FBRWhDLG1CQUFPLEdBQUcsTUFBTSxHQUFHLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUc7QUFBQSxVQUMzQztBQUVBLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixtQkFDRSxZQUNBLEdBQ0csTUFBTSxlQUFlLEVBQUUsQ0FBQyxFQUN4QixNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQ1osUUFBUSxLQUFLLEVBQUUsRUFDZixZQUFZO0FBQUEsVUFFbkI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFDVCxlQUFlO0FBQUEsTUFDZixlQUFlO0FBQUEsTUFDZixlQUFlO0FBQUEsSUFDakIsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFdBQVc7QUFDYixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
