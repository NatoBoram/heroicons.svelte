import type { Meta, StoryObj } from '@storybook/svelte'
import CheckBadgeSvelte from '../../../lib/20/solid/check-badge.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CheckBadgeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CheckBadgeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBadge: Story = {}
