import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassMinusSvelte from '../../../lib/24/solid/magnifying-glass-minus.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: MagnifyingGlassMinusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MagnifyingGlassMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassMinus: Story = {}
