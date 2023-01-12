import type { Meta, StoryObj } from '@storybook/svelte'
import { MagnifyingGlassPlus as MagnifyingGlassPlusSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: MagnifyingGlassPlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MagnifyingGlassPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassPlus: Story = {}
