import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vitest/config'

const config: UserConfig = defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}', 'scripts/**/*.{test,spec}.{js,ts}'],
	},
})

export default config
