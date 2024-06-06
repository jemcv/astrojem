/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans Tagalog', 'Noto Emoji Variable', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [
		typography,
	],
};
