import type { Meta, StoryObj } from '@storybook/svelte'
import { MagnifyingGlassCircle as MagnifyingGlassCircleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: MagnifyingGlassCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MagnifyingGlassCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlassCircle: Story = {}
