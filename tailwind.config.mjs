/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'noto': ['Noto Sans Tagalog', 'sans-serif'],
			'emoji': ['Noto Emoji', 'sans-serif'],
			'sans': ['emoji', ],
		},
		extend: {},
	},
	plugins: [],
}
