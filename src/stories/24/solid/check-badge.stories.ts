import type { Meta, StoryObj } from '@storybook/svelte'
import { CheckBadge as CheckBadgeSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: CheckBadgeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CheckBadgeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBadge: Story = {}
