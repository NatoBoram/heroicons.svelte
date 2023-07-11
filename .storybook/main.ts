import type { StorybookConfig } from '@storybook/sveltekit'
import remarkGfm from 'remark-gfm'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: ['../static'],
}

export default config
