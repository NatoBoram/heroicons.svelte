import type { Meta, StoryObj } from '@storybook/svelte'
import ClipboardDocumentCheckSvelte from '../../../lib/16/solid/clipboard-document-check.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ClipboardDocumentCheckSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ClipboardDocumentCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocumentCheck: Story = {}
