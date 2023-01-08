import type { Meta, StoryObj } from '@storybook/svelte'
import { MagnifyingGlassMinus as MagnifyingGlassMinusSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: MagnifyingGlassMinusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MagnifyingGlassMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassMinus: Story = {}
