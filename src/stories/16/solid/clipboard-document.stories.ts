import type { Meta, StoryObj } from '@storybook/svelte'
import ClipboardDocumentSvelte from '../../../lib/16/solid/clipboard-document.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ClipboardDocumentSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ClipboardDocumentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocument: Story = {}
