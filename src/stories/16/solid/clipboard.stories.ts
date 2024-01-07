import type { Meta, StoryObj } from '@storybook/svelte'
import ClipboardSvelte from '../../../lib/16/solid/clipboard.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ClipboardSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ClipboardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clipboard: Story = {}
