import type { Parameters } from 'storybook/internal/types'
import '../src/app.css'

const parameters: Parameters = {
	backgrounds: {
		default: 'light',
	},
	actions: {},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	parameters: {
		options: {
			storySort: {
				order: ['README'],
			},
		},
	},
}

export default parameters
