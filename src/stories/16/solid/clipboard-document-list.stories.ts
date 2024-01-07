import type { Meta, StoryObj } from '@storybook/svelte'
import ClipboardDocumentListSvelte from '../../../lib/16/solid/clipboard-document-list.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ClipboardDocumentListSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ClipboardDocumentListSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocumentList: Story = {}
