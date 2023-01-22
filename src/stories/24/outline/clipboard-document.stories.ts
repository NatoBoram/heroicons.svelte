import type { Meta, StoryObj } from '@storybook/svelte'
import ClipboardDocumentSvelte from '../../../lib/24/outline/clipboard-document.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ClipboardDocumentSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClipboardDocumentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocument: Story = {}
