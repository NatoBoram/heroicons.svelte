import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpCircle as ArrowUpCircleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUpCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpCircle: Story = {}
