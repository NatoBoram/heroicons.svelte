import type { Meta, StoryObj } from '@storybook/svelte'
import { CheckBadge as CheckBadgeSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: CheckBadgeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CheckBadgeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBadge: Story = {}
