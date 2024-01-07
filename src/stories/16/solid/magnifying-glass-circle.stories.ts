import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassCircleSvelte from '../../../lib/16/solid/magnifying-glass-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MagnifyingGlassCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MagnifyingGlassCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassCircle: Story = {}
