import type { Meta, StoryObj } from '@storybook/svelte'
import { CheckCircle as CheckCircleSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CheckCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CheckCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CheckCircle: Story = {}
