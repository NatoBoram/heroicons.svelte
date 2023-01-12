import type { Meta, StoryObj } from '@storybook/svelte'
import { CheckCircle as CheckCircleSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: CheckCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CheckCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CheckCircle: Story = {}
