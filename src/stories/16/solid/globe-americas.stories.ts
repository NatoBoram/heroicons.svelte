import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeAmericasSvelte from '../../../lib/16/solid/globe-americas.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: GlobeAmericasSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<GlobeAmericasSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAmericas: Story = {}
