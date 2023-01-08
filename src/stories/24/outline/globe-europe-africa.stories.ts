import type { Meta, StoryObj } from '@storybook/svelte'
import { GlobeEuropeAfrica as GlobeEuropeAfricaSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: GlobeEuropeAfricaSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GlobeEuropeAfricaSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeEuropeAfrica: Story = {}
