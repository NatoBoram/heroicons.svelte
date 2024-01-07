import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassSvelte from '../../../lib/16/solid/magnifying-glass.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MagnifyingGlassSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MagnifyingGlassSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlass: Story = {}
