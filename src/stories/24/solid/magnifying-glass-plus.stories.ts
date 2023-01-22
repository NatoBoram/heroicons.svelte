import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassPlusSvelte from '../../../lib/24/solid/magnifying-glass-plus.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: MagnifyingGlassPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MagnifyingGlassPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassPlus: Story = {}
