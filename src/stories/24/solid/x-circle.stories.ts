import type { Meta, StoryObj } from '@storybook/svelte'
import { XCircle as XCircleSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: XCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<XCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XCircle: Story = {}
