import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeAmericasSvelte from '../../../lib/24/outline/globe-americas.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: GlobeAmericasSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GlobeAmericasSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAmericas: Story = {}
