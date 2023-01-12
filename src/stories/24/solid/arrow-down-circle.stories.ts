import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownCircle as ArrowDownCircleSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowDownCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownCircle: Story = {}
