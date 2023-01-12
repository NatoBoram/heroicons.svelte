import type { Meta, StoryObj } from '@storybook/svelte'
import { XMark as XMarkSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: XMarkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<XMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XMark: Story = {}
