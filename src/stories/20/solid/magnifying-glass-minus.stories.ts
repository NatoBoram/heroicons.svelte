import type { Meta, StoryObj } from '@storybook/svelte'
import { MagnifyingGlassMinus as MagnifyingGlassMinusSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: MagnifyingGlassMinusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MagnifyingGlassMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassMinus: Story = {}
