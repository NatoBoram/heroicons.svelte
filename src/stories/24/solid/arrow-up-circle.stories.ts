import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpCircleSvelte from '../../../lib/24/solid/arrow-up-circle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowUpCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpCircle: Story = {}
