import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeEuropeAfricaSvelte from '../../../lib/24/solid/globe-europe-africa.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: GlobeEuropeAfricaSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GlobeEuropeAfricaSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeEuropeAfrica: Story = {}
