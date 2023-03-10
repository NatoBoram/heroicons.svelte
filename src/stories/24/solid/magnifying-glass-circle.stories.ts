import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassCircleSvelte from '../../../lib/24/solid/magnifying-glass-circle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: MagnifyingGlassCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MagnifyingGlassCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassCircle: Story = {}
