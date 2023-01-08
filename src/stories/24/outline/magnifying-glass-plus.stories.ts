import type { Meta, StoryObj } from '@storybook/svelte'
import { MagnifyingGlassPlus as MagnifyingGlassPlusSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: MagnifyingGlassPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MagnifyingGlassPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassPlus: Story = {}
