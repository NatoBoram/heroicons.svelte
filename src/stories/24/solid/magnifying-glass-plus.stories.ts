import type { Meta, StoryObj } from '@storybook/svelte'
import { MagnifyingGlassPlus as MagnifyingGlassPlusSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: MagnifyingGlassPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MagnifyingGlassPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassPlus: Story = {}
