import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassMinusSvelte from '../../../lib/16/solid/magnifying-glass-minus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MagnifyingGlassMinusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MagnifyingGlassMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassMinus: Story = {}
