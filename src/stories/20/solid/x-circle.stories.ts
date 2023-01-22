import type { Meta, StoryObj } from '@storybook/svelte'
import XCircleSvelte from '../../../lib/20/solid/x-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: XCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<XCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XCircle: Story = {}
