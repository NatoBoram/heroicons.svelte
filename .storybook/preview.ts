import type { Parameters } from '@storybook/types'
import '../src/app.postcss'

const parameters: Parameters = {
	backgrounds: {
		default: 'light',
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export default parameters
