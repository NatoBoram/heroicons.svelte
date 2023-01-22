import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeEuropeAfricaSvelte from '../../../lib/20/solid/globe-europe-africa.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: GlobeEuropeAfricaSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<GlobeEuropeAfricaSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeEuropeAfrica: Story = {}
