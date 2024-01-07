import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownCircleSvelte from '../../../lib/16/solid/arrow-down-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowDownCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowDownCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownCircle: Story = {}
