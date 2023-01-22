import type { Meta, StoryObj } from '@storybook/svelte'
import ClipboardDocumentCheckSvelte from '../../../lib/24/outline/clipboard-document-check.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ClipboardDocumentCheckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClipboardDocumentCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocumentCheck: Story = {}
