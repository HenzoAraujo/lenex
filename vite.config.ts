import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { crx } from "@crxjs/vite-plugin"
import manifest from "./manifest.json" with { type: 'json' }
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    crx({ manifest }),
    tailwindcss()
  ],
})
