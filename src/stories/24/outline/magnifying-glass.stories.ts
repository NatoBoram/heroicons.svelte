import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassSvelte from '../../../lib/24/outline/magnifying-glass.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: MagnifyingGlassSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MagnifyingGlassSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlass: Story = {}
