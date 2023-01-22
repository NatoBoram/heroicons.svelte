import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassPlusSvelte from '../../../lib/20/solid/magnifying-glass-plus.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MagnifyingGlassPlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MagnifyingGlassPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassPlus: Story = {}
