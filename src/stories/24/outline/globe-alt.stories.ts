import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeAltSvelte from '../../../lib/24/outline/globe-alt.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: GlobeAltSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GlobeAltSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAlt: Story = {}
