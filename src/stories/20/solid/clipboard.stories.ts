import type { Meta, StoryObj } from '@storybook/svelte'
import { Clipboard as ClipboardSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ClipboardSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ClipboardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clipboard: Story = {}
