import { sveltekit } from '@sveltejs/kit/vite'
import { default as tailwindcss } from '@tailwindcss/vite'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vitest/config'

const config: UserConfig = defineConfig({
	build: { chunkSizeWarningLimit: 1_600 },
	plugins: [sveltekit(), tailwindcss()],
	test: { include: ['src/**/*.{test,spec}.{js,ts}', 'scripts/**/*.{test,spec}.{js,ts}'] },
})

export default config
