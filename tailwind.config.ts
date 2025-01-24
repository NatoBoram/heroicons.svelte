import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{css,html,js,postcss,svelte,ts}', './src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config
