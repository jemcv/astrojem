import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true}
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [react(), tailwind(), sitemap()],
  site: "https:jemcv.me"
});
