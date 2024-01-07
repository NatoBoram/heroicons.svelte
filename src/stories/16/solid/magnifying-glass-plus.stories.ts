import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassPlusSvelte from '../../../lib/16/solid/magnifying-glass-plus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MagnifyingGlassPlusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MagnifyingGlassPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassPlus: Story = {}
