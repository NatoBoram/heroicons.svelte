import type { Meta, StoryObj } from '@storybook/svelte'
import { XCircle as XCircleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: XCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<XCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XCircle: Story = {}
