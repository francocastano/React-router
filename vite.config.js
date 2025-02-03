import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";


export default defineConfig({
    base: "https://francocastano.github.io/React-router/",
    plugins: [react()],
});