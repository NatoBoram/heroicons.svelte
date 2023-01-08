import type { Meta, StoryObj } from '@storybook/svelte'
import { CheckBadge as CheckBadgeSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CheckBadgeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CheckBadgeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBadge: Story = {}
