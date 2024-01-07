import type { Meta, StoryObj } from '@storybook/svelte'
import CheckCircleSvelte from '../../../lib/16/solid/check-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CheckCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CheckCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CheckCircle: Story = {}
