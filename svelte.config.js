import adapterAuto from '@sveltejs/adapter-auto'
import adapterStatic from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

function adapter() {
	if (process.env.GITHUB_ACTIONS) return adapterStatic({ fallback: '404.html' })
	return adapterAuto()
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter(),
	},
}

export default config
