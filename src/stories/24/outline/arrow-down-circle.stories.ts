import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownCircle as ArrowDownCircleSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ArrowDownCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownCircle: Story = {}
