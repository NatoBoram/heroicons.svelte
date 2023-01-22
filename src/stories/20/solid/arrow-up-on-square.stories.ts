import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpOnSquareSvelte from '../../../lib/20/solid/arrow-up-on-square.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUpOnSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpOnSquare: Story = {}
