import type { Meta, StoryObj } from '@storybook/svelte'
import XCircleSvelte from '../../../lib/24/outline/x-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: XCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<XCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XCircle: Story = {}
