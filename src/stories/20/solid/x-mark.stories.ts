import type { Meta, StoryObj } from '@storybook/svelte'
import XMarkSvelte from '../../../lib/20/solid/x-mark.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: XMarkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<XMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const XMark: Story = {}
