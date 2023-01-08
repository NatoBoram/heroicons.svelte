import type { Meta, StoryObj } from '@storybook/svelte'
import { XMark as XMarkSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: XMarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<XMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XMark: Story = {}
