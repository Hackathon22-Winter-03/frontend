import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
    const node_env = process.env.NODE_ENV || "build";
    const out = node_env === "ci-build" ? ".output" : "dist";
    const config = {
        plugins: [react()],
        build: {
            outDir: out
        }
    };
    return config;
});
