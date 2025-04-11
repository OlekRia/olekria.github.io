// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'

const PORT = 4321
const LOCAL_HOST = `http://localhost:${PORT}`
const LIVE_HOST = 'https://olekria.github.io'

const SCRIPT = process.env.npm_lifecycle_script || ''
const isBuild = SCRIPT.includes('astro build')

const BASE_URL = isBuild ? LIVE_HOST : LOCAL_HOST

// https://astro.build/config
export default defineConfig({
  server: {
    port: PORT,
  },
  site: BASE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  output: 'static',
})
