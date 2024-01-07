import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeAltSvelte from '../../../lib/16/solid/globe-alt.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: GlobeAltSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<GlobeAltSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAlt: Story = {}
