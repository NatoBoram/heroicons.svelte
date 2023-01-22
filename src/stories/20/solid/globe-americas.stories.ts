import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeAmericasSvelte from '../../../lib/20/solid/globe-americas.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: GlobeAmericasSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<GlobeAmericasSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAmericas: Story = {}
