import { sveltekit } from '@sveltejs/kit/vite'
import { default as tailwindcss } from '@tailwindcss/vite'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vitest/config'

const config: UserConfig = defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}', 'scripts/**/*.{test,spec}.{js,ts}'],
		coverage: {
			include: ['src/**/*.ts'],
			reporter: ['html-spa', 'json-summary', 'text'],
		},
	},
})

export default config
