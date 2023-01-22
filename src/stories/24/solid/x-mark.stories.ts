import type { Meta, StoryObj } from '@storybook/svelte'
import XMarkSvelte from '../../../lib/24/solid/x-mark.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: XMarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<XMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XMark: Story = {}
