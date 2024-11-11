import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import node from '@astrojs/node';

// Determine the adapter based on command-line arguments
const isNodeMode = process.argv.some(arg => arg.includes('--node'));
const adapter = isNodeMode ? node({ mode: 'standalone' }) : vercel({ webAnalytics: { enabled: true } });

export default defineConfig({
  output: 'server',
  adapter: adapter,
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [react(), tailwind(), sitemap()],
  site: "https://jemcv.me"
});