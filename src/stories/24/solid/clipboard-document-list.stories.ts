import type { Meta, StoryObj } from '@storybook/svelte'
import ClipboardDocumentListSvelte from '../../../lib/24/solid/clipboard-document-list.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ClipboardDocumentListSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClipboardDocumentListSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocumentList: Story = {}
