import type { Meta, StoryObj } from '@storybook/svelte'
import { XCircle as XCircleSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: XCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<XCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XCircle: Story = {}
