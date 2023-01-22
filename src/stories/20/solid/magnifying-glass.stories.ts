import type { Meta, StoryObj } from '@storybook/svelte'
import MagnifyingGlassSvelte from '../../../lib/20/solid/magnifying-glass.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MagnifyingGlassSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MagnifyingGlassSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlass: Story = {}
