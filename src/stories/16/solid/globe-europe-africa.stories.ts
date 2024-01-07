import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeEuropeAfricaSvelte from '../../../lib/16/solid/globe-europe-africa.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: GlobeEuropeAfricaSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<GlobeEuropeAfricaSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeEuropeAfrica: Story = {}
