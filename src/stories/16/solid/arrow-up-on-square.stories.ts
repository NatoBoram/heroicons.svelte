import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpOnSquareSvelte from '../../../lib/16/solid/arrow-up-on-square.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUpOnSquareSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUpOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpOnSquare: Story = {}
