import type { Meta, StoryObj } from '@storybook/svelte'
import ClipboardSvelte from '../../../lib/24/solid/clipboard.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ClipboardSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClipboardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clipboard: Story = {}
