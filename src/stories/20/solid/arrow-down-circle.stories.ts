import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownCircle as ArrowDownCircleSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowDownCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowDownCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownCircle: Story = {}
