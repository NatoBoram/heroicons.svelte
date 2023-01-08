import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpCircle as ArrowUpCircleSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowUpCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpCircle: Story = {}
