import type { Meta, StoryObj } from '@storybook/svelte'
import XMarkSvelte from '../../../lib/24/outline/x-mark.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: XMarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<XMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XMark: Story = {}
