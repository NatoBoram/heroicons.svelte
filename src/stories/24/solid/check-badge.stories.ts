import type { Meta, StoryObj } from '@storybook/svelte'
import CheckBadgeSvelte from '../../../lib/24/solid/check-badge.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CheckBadgeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CheckBadgeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBadge: Story = {}
