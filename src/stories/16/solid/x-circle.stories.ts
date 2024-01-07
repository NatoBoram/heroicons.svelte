import type { Meta, StoryObj } from '@storybook/svelte'
import XCircleSvelte from '../../../lib/16/solid/x-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: XCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<XCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XCircle: Story = {}
