import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Enables Vite to listen on all IP addresses
    port: 5173,
  },
  plugins: [react()],
});
