import { HstSvelte } from '@histoire/plugin-svelte'
import { defineConfig } from 'histoire'
import colors from 'tailwindcss/colors'

export default defineConfig({
	plugins: [HstSvelte()],
	setupFile: '/src/histoire.ts',
	theme: {
		title: 'heroicons.svelte',
		logo: {
			light: '/src/svg/logo-light.svg',
			dark: '/src/svg/logo-dark.svg',
		},
		colors: {
			primary: colors.violet,
			gray: colors.zinc,
		},
	},
	tree: {
		order: (a, b) => {
			if (a === 'README') return -1
			if (b === 'README') return 1

			if (a === 'LICENSE') return 1
			if (b === 'LICENSE') return -1

			return a.localeCompare(b)
		},
	},
})
