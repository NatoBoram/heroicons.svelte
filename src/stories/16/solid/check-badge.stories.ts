import type { Meta, StoryObj } from '@storybook/svelte'
import CheckBadgeSvelte from '../../../lib/16/solid/check-badge.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CheckBadgeSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CheckBadgeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBadge: Story = {}
