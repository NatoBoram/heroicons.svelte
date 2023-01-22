import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassCircleSvelte from '../../../lib/20/solid/magnifying-glass-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MagnifyingGlassCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MagnifyingGlassCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassCircle: Story = {}
