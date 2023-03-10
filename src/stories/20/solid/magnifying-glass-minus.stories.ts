import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassMinusSvelte from '../../../lib/20/solid/magnifying-glass-minus.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MagnifyingGlassMinusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MagnifyingGlassMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassMinus: Story = {}
