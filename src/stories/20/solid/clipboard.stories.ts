import type { Meta, StoryObj } from '@storybook/svelte'
import ClipboardSvelte from '../../../lib/20/solid/clipboard.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ClipboardSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ClipboardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clipboard: Story = {}
