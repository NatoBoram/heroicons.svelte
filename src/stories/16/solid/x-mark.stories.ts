import type { Meta, StoryObj } from '@storybook/svelte'
import XMarkSvelte from '../../../lib/16/solid/x-mark.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: XMarkSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<XMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XMark: Story = {}
