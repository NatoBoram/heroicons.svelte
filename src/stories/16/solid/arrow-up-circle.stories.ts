import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpCircleSvelte from '../../../lib/16/solid/arrow-up-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUpCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUpCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpCircle: Story = {}
